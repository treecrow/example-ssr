# [pm2](https://github.com/Unitech/pm2)

> node 进程管理工具,利用它来简化很多 node 应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单

## Commands

| command                                                 | more                                                                                       |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| start [options][name/namespace/file/ecosystem/id...]    | 启动指定应用                                                                               |
| stop [options] <id/name/namespace/all/json/stdin...>    | 停止指定应用                                                                               |
| reload <name/all>                                       | 重启指定应用                                                                               |
| restart [options] <id/name/namespace/all/json/stdin...> | ^                                                                                          |
| delete/del <name/id/script/all/json/stdin...>           | 删除指定应用，如果修改应用配置行为，最好先删除应用后，重新启动方才生效，如修改脚本入口文件 |
| show <name/id>                                          | 显示指定应用详情                                                                           |
| describe <name/id>                                      | 查看某个进程/应用具体情况                                                                  |
| list/ls                                                 | 列出所有正在运行的 pm2 进程                                                                |
| kill                                                    | 杀掉 pm2 管理的所有进程                                                                    |
| monit                                                   | 监控各个应用进程 cpu 和 memory 使用情况(命令行仪表盘)                                      |
| logs [options][id/name]                                 | 查看指定应用的日志，即标准输出和标准错误                                                   |
| ===                                                     | ===                                                                                        |
| startup [platform]                                      | enable the pm2 startup hook                                                                |
| unstartup [platform]                                    | disable the pm2 startup hook                                                               |
| dump/save [options]                                     | dump all processes for resurrecting them later                                             |
| trigger <proc_name> <action_name> [params]              | trigger process action                                                                     |
| deploy <file/environment>                               | deploy your json                                                                           |
| startOrRestart <json>                                   | start or restart JSON file                                                                 |
| startOrReload <json>                                    | start or gracefully reload JSON file                                                       |
| pid [app_name]                                          | return pid of [app_name] or all                                                            |
| create                                                  | return pid of [app_name] or all                                                            |
| startOrGracefulReload <json>                            | start or gracefully reload JSON file                                                       |
| scale <app_name> <number>                               | scale up/down a process in cluster mode depending on total_number param                    |
| profile:mem [time]                                      | Sample PM2 heap memory                                                                     |
| profile:cpu [time]                                      | Profile PM2 cpu                                                                            |
| id <name>                                               | get process id by name                                                                     |
| inspect <name>                                          | inspect a process                                                                          |
| sendSignal <signal> <pm2_id/name>                       | send a system signal to the target process                                                 |
| ping                                                    | ping pm2 daemon - if not up it will launch it                                              |
| updatePM2                                               | update in-memory PM2 with local PM2                                                        |
| update                                                  | (alias) update in-memory PM2 with local PM2                                                |
| install/module:install [options] <module/git:/>         | install or update a module and run it forever                                              |
| module:update <module/git:/>                            | update a module and run it forever                                                         |
| module:generate [app_name]                              | Generate a sample module in current folder                                                 |
| uninstall/module:uninstall <module>                     | stop and uninstall a module                                                                |
| package [target]                                        | Check & Package TAR type module                                                            |
| publish/module:publish [options][folder]                | Publish the module you are currently on                                                    |
| set [key][value]                                        | sets the specified config <key> <value>                                                    |
| multiset <value>                                        | multiset eg "key1 val1 key2 val2                                                           |
| get [key]                                               | get value for <key>                                                                        |
| conf [key][value]                                       | get / set module config values                                                             |
| config <key> [value]                                    | get / set module config values                                                             |
| unset <key>                                             | clears the specified config <key>                                                          |
| report                                                  | give a full pm2 report for https://github.com/Unitech/pm2/issues                           |
| link [options][secret] [public][name]                   | link with the pm2 monitoring dashboard                                                     |
| unlink                                                  | unlink with the pm2 monitoring dashboard                                                   |
| monitor [name]                                          | monitor target process                                                                     |
| unmonitor [name]                                        | unmonitor target process                                                                   |
| open                                                    | open the pm2 monitoring dashboard                                                          |
| plus/register [options][command] [option]               | enable pm2 plus                                                                            |
| login                                                   | Login to pm2 plus                                                                          |
| logout                                                  | Logout from pm2 plus                                                                       |
| cleardump                                               | Create empty dump file                                                                     |
| send <pm_id> <line>                                     | send stdin to <pm_id>                                                                      |
| attach <pm_id> [comman]                                 | attach stdin/stdout to application identified by <pm_id>                                   |
| resurrect                                               | resurrect previously dumped processes                                                      |
| logrotate                                               | copy default logrotate configuration                                                       |
| ecosystem/init [mode]                                   | generate a process conf file. (mode = null or simple)                                      |
| reset <name/id/all>                                     | reset counters for process                                                                 |
| desc <name/id>                                          | (alias) describe all parameters of a process                                               |
| info <name/id>                                          | (alias) describe all parameters of a process                                               |
| env <id>                                                | list all environment variables of a process id                                             |
| l                                                       | (alias) list all processes                                                                 |
| ps                                                      | (alias) list all processes                                                                 |
| status                                                  | (alias) list all processes                                                                 |
| jlist                                                   | list all processes in JSON format                                                          |
| sysmonit                                                | start system monitoring daemon                                                             |
| slist/sysinfos [options]                                | list system infos in JSON                                                                  |
| prettylist                                              | print json in a prettified JSON                                                            |
| imonit                                                  | launch legacy termcaps monitoring                                                          |
| dashboard/dash                                          | launch dashboard with monitoring and logs                                                  |
| flush [api]                                             | flush logs                                                                                 |
| reloadLogs                                              | reload all logs                                                                            |
| pull <name> [commit_id]                                 | updates repository for a given app                                                         |
| forward <name>                                          | updates repository to the next commit for a given app                                      |
| backward <name>                                         | downgrades repository to the previous commit for a given app                               |
| deepUpdate                                              | performs a deep update of PM2                                                              |
| serve/expose [options][path] [port]                     | serve a directory over http via port                                                       |
| autoinstall                                             | -                                                                                          |
| examples                                                | display pm2 usage examples                                                                 |

## Options

| option                              | more                                                                                       |
| ----------------------------------- | ------------------------------------------------------------------------------------------ |
| -n --name <name>                    | 应用的名称                                                                                 |
| -i --instances <number>             | 启用多少个实例，可用于负载均衡。如果-i 0 或者-i max，则根据当前机器核数确定实例数目。      |
| --watch [paths]                     | 监听应用目录的变化，一旦发生变化，自动重启                                                 |
| -o --output <path>                  | 标准输出日志文件的路径                                                                     |
| -e --error <path>                   | 错误输出日志文件的路径                                                                     |
| --interpreter <interpreter>         | 设置一个用于运行程序的解释器, default: node                                                |
| ===                                 | ===                                                                                        |
| -V, --version                       | output the version number                                                                  |
| -v --version                        | print pm2 version                                                                          |
| -s --silent                         | hide all messages                                                                          |
| --ext <extensions>                  | watch only this file extensions                                                            |
| -m --mini-list                      | display a compacted list without formatting                                                |
| --interpreter-args <arguments>      | set arguments to pass to the interpreter (alias of --node-args)                            |
| --node-args <node_args>             | space delimited arguments to pass to node                                                  |
| -l --log [path]                     | specify log file which gathers both stdout and stderr                                      |
| --log-type <type>                   | specify log output style (raw by default, json optional)                                   |
| --log-date-format <date format>     | add custom prefix timestamp to logs                                                        |
| --time                              | enable time logging                                                                        |
| --disable-logs                      | disable all logs storage                                                                   |
| --env <environment_name>            | specify which set of environment variables from ecosystem file must be injected            |
| -a --update-env                     | force an update of the environment with restart/reload (-a <=> apply)                      |
| -f --force                          | force actions                                                                              |
| --parallel <number>                 | number of parallel actions (for restart/reload)                                            |
| --shutdown-with-message             | shutdown an application with process.send('shutdown') instead of process.kill(pid, SIGINT) |
| -p --pid <pid>                      | specify pid file                                                                           |
| -k --kill-timeout <delay>           | delay before sending final SIGKILL signal to process                                       |
| --listen-timeout <delay>            | listen timeout on application reload                                                       |
| --max-memory-restart <memory>       | Restart the app if an amount of memory is exceeded (in bytes)                              |
| --restart-delay <delay>             | specify a delay between restarts (in milliseconds)                                         |
| --exp-backoff-restart-delay <delay> | specify a delay between restarts (in milliseconds)                                         |
| -x --execute-command                | execute a program using fork system                                                        |
| --max-restarts [count]              | only restart the script COUNT times                                                        |
| -u --user <username>                | define user when generating startup script                                                 |
| --uid <uid>                         | run target script with <uid> rights                                                        |
| --gid <gid>                         | run target script with <gid> rights                                                        |
| --namespace <ns>                    | start application within specified namespace                                               |
| --cwd <path>                        | run target script as <username>                                                            |
| --hp <home path>                    | define home path when generating startup script                                            |
| --wait-ip                           | override systemd script to wait for full internet connectivity to launch pm2               |
| --service-name <name>               | define service name when generating startup script                                         |
| -c --cron <cron_pattern>            | restart a running process based on a cron pattern                                          |
| -w --write                          | write configuration in local folder                                                        |
| --no-daemon                         | run pm2 daemon in the foreground if it doesn't exist already                               |
| --source-map-support                | force source map support                                                                   |
| --only <application-name>           | with json declaration, allow to only act on one application                                |
| --disable-source-map-support        | force source map support                                                                   |
| --wait-ready                        | ask pm2 to wait for ready event from your app                                              |
| --merge-logs                        | merge logs from different instances but keep error and out separated                       |
| --ignore-watch <folders/files>      | List of paths to ignore (name or regex)                                                    |
| --watch-delay <delay>               | specify a restart delay after changing files (--watch-delay 4 (in sec) or 4000ms)          |
| --no-color                          | skip colors                                                                                |
| --no-vizion                         | start an app without vizion feature (versioning control)                                   |
| --no-autorestart                    | start an app without automatic restart                                                     |
| --no-treekill                       | Only kill the main process, not detached children                                          |
| --no-pmx                            | start an app without pmx                                                                   |
| --no-automation                     | start an app without pmx                                                                   |
| --trace                             | enable transaction tracing with km                                                         |
| --disable-trace                     | disable transaction tracing with km                                                        |
| --attach                            | attach logging after your start/restart/stop/reload                                        |
| --v8                                | enable v8 data collecting                                                                  |
| --event-loop-inspector              | enable event-loop-inspector dump in pmx                                                    |
| --deep-monitoring                   | enable all monitoring tools (equivalent to --v8 --event-loop-inspector --trace)            |
| -h, --help                          | output usage information                                                                   |

## config list

| key                | more                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------- |
| name               | 应用进程名称                                                                                |
| script             | 启动脚本路径                                                                                |
| cwd                | 应用启动的路径                                                                              |
| args               | 传递给脚本的参数                                                                            |
| interpreter        | 指定的脚本解释器                                                                            |
| interpreter_args   | 传递给解释器的参数                                                                          |
| instances          | 应用启动实例个数，仅在 cluster 模式有效，默认为 fork                                        |
| exec_mode          | 应用启动模式，支持 fork 和 cluster 模式                                                     |
| watch              | 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启                                    |
| ignore_watch       | 忽略监听的文件夹，支持正则表达式                                                            |
| max_memory_restart | 最大内存限制数，超出自动重启                                                                |
| env                | 环境变量，object 类型，如{"NODE_ENV":"production", "ID": "42"}                              |
| log_date_format    | 指定日志日期格式，如 YYYY-MM-DD HH:mm:ss；                                                  |
| error_file         | 记录标准错误流，\$HOME/.pm2/logs/XXXerr.log)，代码错误可在此文件查找                        |
| out_file           | 记录标准输出流，\$HOME/.pm2/logs/XXXout.log)，如应用打印大量的标准输出，会导致 pm2 日志过大 |
| min_uptime         | 应用运行少于时间被认为是异常启动                                                            |
| max_restarts       | 最大异常重启次数，即小于 min_uptime 运行时间重启次数                                        |
| autorestart        | 默认为 true, 发生异常的情况下自动重启                                                       |
| cron_restart       | crontab 时间格式重启应用，目前只支持 cluster 模式                                           |
| force              | 默认 false，如果 true，可以重复启动一个脚本。pm2 不建议这么做                               |
| restart_delay      | 异常重启情况下，延时重启时间                                                                |

---

# pm2-dev

## Commands

| command                | more                                                |
| ---------------------- | --------------------------------------------------- |
| start <file/json_file> | start target config file/script in development mode |

## Options

| option                      | more                                                                                                            |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| -V, --version               | output the version number                                                                                       |
| --raw                       | raw log output                                                                                                  |
| --timestamp                 | print timestamp                                                                                                 |
| --node-args <node_args>     | space delimited arguments to pass to node in cluster mode - e.g. --node-args="--debug=7001 --trace-deprecation" |
| --ignore [files]            | files to ignore while watching                                                                                  |
| --post-exec [cmd]           | execute extra command after change detected                                                                     |
| --silent-exec               | do not output result of post command                                                                            |
| --test-mode                 | debug mode for test suit                                                                                        |
| --interpreter <interpreter> | the interpreter pm2 should use for executing app (bash, python...)                                              |
| --env [name]                | select env\_[name] env variables in process config file                                                         |
| --auto-exit                 | exit if all processes are errored/stopped or 0 apps launched                                                    |
| -h, --help                  | output usage information                                                                                        |
