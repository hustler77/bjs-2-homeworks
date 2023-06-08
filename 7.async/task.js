class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    let repeatedCall = this.alarmCollection.find((call) => call.time === time);
    if (repeatedCall) {
      console.warn("Уже присутствует звонок на это время");
    }
    this.alarmCollection.push({ callback, time, canCall: true });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (remove) => remove.time != time
    );
  }

  getCurrentFormattedTime() {
    var currentTime = new Date();
    return currentTime.toLocaleTimeString().slice(0, -3);
  }

  start() {
    if (this.intervalId) {
      return;
    }
    let newInterval = () => {
      this.alarmCollection.forEach((call) => {
        if (call.time === this.getCurrentFormattedTime() && call.canCall) {
          call.canCall = false;
          call.callback();
        }
      });
    };
    this.intervalId = setInterval(newInterval, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((call) => (call.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
