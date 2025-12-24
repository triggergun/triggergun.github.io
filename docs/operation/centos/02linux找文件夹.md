# linux找文件夹

## 从当前目录开始找

在Linux上，你可以使用`find`命令来查找文件夹的名字。例如，如果你想在当前目录及其子目录中查找名

```shell
find . -type d -name "example_folder"
```

.` 表示当前目录。` 

-type d` 表示只查找目录（文件夹）。` 

-name "example_folder"` 指定要查找的文件夹名称。`question_type_trigger

## 从根目录开始找

```shell
 find / -type f -name nps
```

命令 `find / -type f -name nps` 在Linux系统中用于查找文件系统中名为 "nps" 的文件。

- `find` 是一个强大的命令行工具，用于在目录树中搜索文件和目录。
- `/` 表示从根目录开始搜索，这意味着搜索将涵盖整个文件系统。
- `-type f` 指定只查找类型为普通文件（file）的条目。
- `-name nps` 指定要查找的文件名必须精确匹配 "nps"。