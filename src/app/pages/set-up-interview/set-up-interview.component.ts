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
  selector: 'app-set-up-interview',
  templateUrl: './set-up-interview.component.html',
  styleUrls: ['./set-up-interview.component.scss']
})
export class SetUpInterviewComponent {
  

}
