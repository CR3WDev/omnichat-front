export interface IMessage {
  id: number
  sender: string
  text: string
  time: string
  type: string
  isBotMessage: boolean
}
