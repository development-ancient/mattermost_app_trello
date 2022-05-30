import axios, { AxiosResponse } from 'axios';
import config from '../config';

export interface TrelloOptions {
  apiKey: string;
  token: string;
}

export class TrelloClient {
  private readonly config: TrelloOptions;

  constructor(
    config: TrelloOptions
  ) {
    this.config = config;
  }

  private getKeyAndTokenUrlParams(): string {
    return `key=${this.config.apiKey}&token=${this.config.token}`
  }

  public getListByBoard(boardId: string): Promise<any> {
    const url: string = `${config.TRELLO.URL}boards/${boardId}/lists?${this.getKeyAndTokenUrlParams()}`;
    
    return axios.get(url).then((response:  AxiosResponse<any>) => response.data);
  }

  public searchBoardByName(boardName: string): Promise<any> {
    const url: string = `${config.TRELLO.URL}search?modelTypes=boards&query=${boardName}&${this.getKeyAndTokenUrlParams()}`;
    
    return axios.get(url).then((response:  AxiosResponse<any>) => response.data);
  }

  public searchBoardsInOrganization(): Promise<any> {
    const url: string = `${config.TRELLO.URL}organizations/60c99e3ff7a1801bb8ac7f36/boards?${this.getKeyAndTokenUrlParams()}`;
    
    return axios.get(url).then((response:  AxiosResponse<any>) => response.data);
  }

  public sendCreateCardRequest(listId: string, cardName: string): Promise<any> {
    const url: string = `${config.TRELLO.URL}cards?idList=${listId}&name=${cardName}&${this.getKeyAndTokenUrlParams()}`;
    
    return axios.post(url).then((response:  AxiosResponse<any>) => response.data);
  }
}