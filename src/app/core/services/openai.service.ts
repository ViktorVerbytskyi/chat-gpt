import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';

const chatGPTApiKey: string = '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';

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

  async  generateText(prompt: string): Promise<string> {
    const response = await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return response.data.choices[0].message?.content || '';
  }
}

