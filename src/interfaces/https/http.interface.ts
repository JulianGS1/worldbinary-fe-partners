interface TimeLapse {
  started: string;
  ended: string;
  duration: number;
}

export interface IHttpResponse<T> {
  data: {
    item: T;
  };
  success: boolean;
  kindMessage: string;
  timeLapse: TimeLapse;
}
