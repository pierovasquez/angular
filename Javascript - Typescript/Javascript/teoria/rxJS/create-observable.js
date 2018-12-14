let o = new observable(observer => {
    doAsyncThing((err, value) => {
        if (err) {
            observer.error(err);
        } else {
            observer.next(value);
            observer.complete();
        }
    })
})