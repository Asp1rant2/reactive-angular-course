import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export enum RxjsLoggingLevel {
    TRACE,
    DEBUG,
    INFO,
    ERROR
}

let rxjsLoggingLevel = RxjsLoggingLevel.INFO;

export const debug = (level: number, message: string) => (observable: Observable<any>) => {
    return observable
        .pipe(
            tap(val => {
                if (level >= rxjsLoggingLevel) {
                    console.log(message + ":" + val);
                }
            })
        );
}