import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

const chatGPTApiKey: string = '';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  private openai: OpenAIApi;
  configuration: Configuration = new Configuration({
    apiKey: chatGPTApiKey,
  });

  constructor() {
    this.openai = new OpenAIApi(this.configuration);
  }

  generateText(prompt: string): Promise<string> {
    return this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 256
    }).then(response => {
      return response.data.choices[0].text || '';
    }).catch(error => 'catch error');
  }
}

