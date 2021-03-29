import { Type } from "class-transformer";
import moment from "moment";

import "moment-duration-format";

export class Progress {
  public id!: string;

  public episodeId!: string;

  public userId!: string;

  public duration!: number;

  @Type(() => Date)
  public createdAt!: Date;

  @Type(() => Date)
  public updatedAt!: Date;

  public static empty() {
    return new Progress();
  }

  public isEmpty() {
    return this.id === undefined;
  }

  public setDuration(duration: number) {
    this.duration = duration;
  }

  public getDurationAsTimeString() {
    const oneHourInSeconds = 3600;
    const duration = moment.duration(this.duration, "seconds");
    const hasMoreThanOneHour = this.duration >= oneHourInSeconds;

    const durationAsTime = hasMoreThanOneHour
      ? duration.format("hh:mm", { trim: false })
      : duration.format("mm:ss", { trim: false });
    const durationAsTimeString = hasMoreThanOneHour ? `${durationAsTime} hours` : `${durationAsTime} minutes`;

    return durationAsTimeString;
  }
}
