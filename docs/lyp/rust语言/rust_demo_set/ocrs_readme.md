# Ocrs

用于OCR（从图像中提取文本）的Rust库和CLI工具

CLI工具是：指命令行工具



The goal is to create a modern OCR engine that:

目标是创建一个现代OCR引擎，该引擎：

- Works well on a wide variety of images (scanned documents, photos containing text, screenshots etc.) with zero or much less preprocessing effort compared to earlier engines like [Tesseract](https://github.com/tesseract-ocr/tesseract). This is achieved by using machine learning more extensively in the pipeline.

  与Tesseract等早期引擎相比，它在各种图像（扫描文档、包含文本的照片、屏幕截图等）上都能很好地工作，预处理工作量为零或少得多。这是通过<font color="red">在管道中</font>更广泛地使用机器学习来实现的。

- Is easy to compile and run across a variety of platforms, including WebAssembly

  易于在各种平台上编译和运行，包括WebAssembly

- Is trained on open and liberally licensed datasets

  在开放和自由许可的数据集上接受培训

- Has a codebase that is easy to understand and modify

  具有易于理解和修改的代码库

Under the hood, the library uses neural <font color="red">network models</font> trained in [PyTorch](https://pytorch.org/), <font color="red">which</font> are then exported to [ONNX](https://onnx.ai/) and <font color="red">executed using </font>the [RTen](https://github.com/robertknight/rten) engine. See the [models](https://github.com/robertknight/ocrs#models-and-datasets) section for <font color="red">more details</font>.【跳转到模型部分】

在引擎盖下，该库使用在PyTorch中训练的神经网络模型，然后将其导出到ONNX并使用RTen引擎执行。有关更多详细信息，请参阅模型部分。

## Status状态

ocrs is currently in an early preview. Expect more errors than commercial OCR engines.

ocrs目前处于早期预览阶段。预计会出现比商用OCR引擎更多的错误。

## Language Support语言支持

ocrs currently recognizes the Latin alphabet only (eg. English). Support for more languages is [planned](https://github.com/robertknight/ocrs/issues/8).

ocrs目前只识别拉丁字母（如英语）。计划支持更多语言。

## CLI installation命令行安装

To install the CLI tool, you will first need Rust and Cargo installed. Then run:

要安装CLI工具，您首先需要安装Rust和Cargo。然后运行：

第一步：安装Rust和Cargo请见：



```shell
$ cargo install ocrs-cli
```



## CLI usage命令行的使用

To extract text from an image, run:

要从图像中提取文本，请运行：

```shell
$ ocrs image.png
```

When the tool is run for the first time, it will download the required models automatically and store them in `~/.cache/ocrs`.

当该工具首次运行时，它将自动下载所需的模型并将其存储在“~/.cache/ocrs”中。



## Additional examples其他示例

Extract text from an image and write to `content.txt`:

从图像中提取文本并写入“content.txt”：

```
$ ocrs image.png -o content.txt
```



Extract text and layout information from the image in JSON format:

以JSON格式从图像中提取文本和布局信息：

```
$ ocrs image.png --json -o content.json
```



Annotate an image to show the location of detected words and lines:

注释图像以显示检测到的单词和线条的位置：

```
$ ocrs image.png --png -o annotated.png
```





## Library usage库的使用

See the [ocrs crate README](https://github.com/robertknight/ocrs/blob/main/ocrs) for details on how to use ocrs as a Rust library.

有关如何将ocrs用作Rust库的详细信息，请参阅ocrs crate README。

## Models and datasets模型和数据集

ocrs uses neural network models written in PyTorch. See the [ocrs-models](https://github.com/robertknight/ocrs-models) repository for more details about the models and datasets, as well as tools for training custom models. These models are also available in ONNX format for use with other machine learning runtimes.

ocrs使用 <font color="red">PyTorch编写的神经网络模型</font>。有关模型和数据集的更多详细信息，以及 <font color="red">训练自定义模型的工具</font>，请参阅ocrs模型存储库。

这些模型也有ONNX格式，可用于其他机器学习运行时。

## Development部署

To build and run the ocrs library and CLI tool locally you will need a recent stable Rust version installed. Then run:

要在本地构建和运行ocrs库和CLI工具，您需要安装最新稳定的Rust版本。然后运行：

```
git clone https://github.com/robertknight/ocrs.git
cd ocrs
cargo run -p ocrs-cli -r -- image.png
```

## Testing测试

Ocrs has unit tests for the code that runs before and after ML model processing, plus E2E tests which exercise the whole pipeline, including models.

After making changes to the code, run unit tests and lint checks with:

```
make check
```

You can also run standard commands like `cargo test` directly.

Run the E2E tests with:

```
make test-e2e
```

For details of how the ML models are evaluated, see the [ocrs-models](https://github.com/robertknight/ocrs-models) repository.









