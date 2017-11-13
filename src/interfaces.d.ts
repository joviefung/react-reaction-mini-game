interface AppState {
  isStarted: boolean;
  showResult: boolean;
  waitTime: number;
  bestRecord: number;
}

interface BeginButtonProps {
  onClick: () => void;
}

interface MyButtonProps {
  waitTime: number;
  onSuccess: (reactTime: number) => void;
  onFailure: () => void;
}

interface MyButtonState {
  canClick: boolean;
  clicked: boolean;
  waitTime: number;
  startTime?: Date;
  endTime?: Date;
}