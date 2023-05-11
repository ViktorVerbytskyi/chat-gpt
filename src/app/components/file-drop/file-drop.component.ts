import { Component, ElementRef, ViewChild } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { OpenaiService } from "../../services/openai.service";

class TextModel {
  text: Array<string> = [];
  response: string = '';
}

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})
export class FileDropComponent {
  @ViewChild("fileDropRef1") fileDropEl1!: ElementRef;
  @ViewChild("fileDropRef2") fileDropEl2!: ElementRef;
  files: any[] = [];
  textModel: TextModel = { text: [], response: '' };

  constructor(private openaiService: OpenaiService) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js';
  }

  onFileDropped(files: Array<any>): void {
    this.prepareFilesList(files[0]);
  }

  fileBrowseHandler(event: Event): void {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const files: Array<any> = target.files as unknown as Array<any>;
    this.prepareFilesList(files[0]);
  }

  deleteFile(index: number): void {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
    this.textModel.text.splice(index, 1);
  }

  formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  generateRequestToChatGPT(): void {
    if (this.files.length !== 2) {
      return;
    }
    const cvText = this.textModel.text[0];
    const vacancyText = this.textModel.text[1];

    const mappedText = `
      CV text: ${cvText}.\n
      Vacancy text: ${vacancyText}.\n
      Look at this CV and Vacancy texts, compare, they are the same?
    `;
    this.openaiService.generateText(mappedText).then((text: string) => {
      this.textModel.response = text;
    });
  }

  saveToPdf(): void { // more info you can see here: https://pdfmake.github.io/docs/0.1/
    const docDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],

            body: [
              [ 'First', 'Second', 'Third', 'The last one' ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
    };

    //for download
    // const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    // pdfDocGenerator.download('document.pdf');

    //for open
    pdfMake.createPdf(docDefinition).open();
  }

  private prepareFilesList(file: any): void {
    file.progress = 0;
    this.files.push(file);
    this.pdfToText(file);
    this.fileDropEl1.nativeElement.value = "";
    this.fileDropEl2.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  private pdfToText (file: File): void {
    const fileReader: FileReader = new FileReader();

    fileReader.onload = async (event): Promise<void> => {
      const pdfData = new Uint8Array(event.target?.result as ArrayBuffer);
      const pdf = await pdfjsLib.getDocument(pdfData).promise;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const text: string = textContent.items.map((item: any) => item.str).join(' ');
        this.textModel.text = [...this.textModel.text, text];
      }
    };

    fileReader.readAsArrayBuffer(file);
  }

  private uploadFilesSimulator(index: number): void {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

}
