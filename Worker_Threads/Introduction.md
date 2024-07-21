## Thread

They are responsive to handle the complex tasks which can be referred as asynchronous tasks.

## Event Loop

 The main thread in nodejs architecture handles the blocking operations (synchronous tasks), event loop management and assignes works to the threads.
- Here the main thread is not blocked, as it doesnot performs blocking operations like multi threaded language.

## Worker Threads

- The worker threads which are availble in the thread pool are provided by linuv to the event loop.
- By default only 4 threads are present in the thread pool.
- Additional Thread in the system is used for parallel execution of the resource consuming processes.


