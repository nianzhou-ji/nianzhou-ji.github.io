# 环境配置

1. 新建clion工程:cpp_module_math_lib和pycharm工程:testPyBind，目录结构如下：

![image-20240926164411854](D:/nianzhou/study/testPyBind/%E9%87%87%E7%94%A8PyCharm%E5%92%8CClion%E7%BB%93%E5%90%88Pybind%E7%BC%96%E5%86%99Pyd%E6%A8%A1%E5%9D%97.assets/image-20240926164411854.png)

1. ```shell
   pip install colorama==0.4.6 pybind11==2.13.6 pybind11-stubgen==2.5.1 pypng==0.20220715.0 typing_extensions==4.12.2
   ```

   



# Clion 工程配置



```makefile
# CMakeLists.txt


cmake_minimum_required(VERSION 3.29)
project(math_lib)

set(CMAKE_CXX_STANDARD 11)

# 设置 pybind11 路径
set(PYBIND11_DIR ../../.venv/lib/site-packages/pybind11/share/cmake/pybind11)
set(PYTHON_EXECUTABLE ../../.venv/Scripts/python.exe)

# 查找 pybind11
find_package(pybind11 REQUIRED PATHS ${PYBIND11_DIR})

# 设置静态链接标志
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -static -static-libgcc -static-libstdc++")

# 添加模块
pybind11_add_module(math_lib math_lib.cpp)

# 强制链接静态库
set_target_properties(math_lib PROPERTIES
        LINK_SEARCH_START_STATIC TRUE
        LINK_SEARCH_END_STATIC TRUE
)

# 添加自定义命令生成 .pyi 文件
add_custom_command(
        TARGET math_lib POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E env PYTHONPATH=${CMAKE_CURRENT_BINARY_DIR} ${PYTHON_EXECUTABLE} -m pybind11_stubgen --output-dir=${CMAKE_CURRENT_BINARY_DIR} math_lib
)

# 确保 CMake 正确查找库文件
set_target_properties(math_lib PROPERTIES
        LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
        RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_BINARY_DIR}
)

```

```cpp
// math_lib.cpp
#include <pybind11/pybind11.h>

namespace py = pybind11;

class Math {
public:
    static int add(int a, int b) {
        return a + b;
    }

    static int multiply(int a, int b) {
        return a * b;
    }


    static int divide(int a, int b) {
        return a / b;
    }
};

PYBIND11_MODULE(math_lib, m) {
    m.doc() = "A simple math library"; // 可选文档
    m.def("add", &Math::add, "A function that adds two numbers",
          py::arg("a"), py::arg("b")); // 指定参数名称
    m.def("multiply", &Math::multiply, "A function that multiplies two numbers",
          py::arg("a"), py::arg("b")); // 指定参数名称

    m.def("divide", &Math::divide, "A function that divide two numbers",
      py::arg("a"), py::arg("b")); // 指定参数名称
}

```



# PyCharm工程配置

```python
# main.py

import math_lib
result_add = math_lib.add(3, 5)
result_multiply = math_lib.multiply(3, 5)
result_div = math_lib.divide(10, 5)

print(f"Addition: {result_add}")
print(f"Multiplication: {result_multiply}")
print(f"result_div: {result_div}")

```

**备注：记得添加生成的![image-20240926164853706](D:/nianzhou/study/testPyBind/%E9%87%87%E7%94%A8PyCharm%E5%92%8CClion%E7%BB%93%E5%90%88Pybind%E7%BC%96%E5%86%99Pyd%E6%A8%A1%E5%9D%97.assets/image-20240926164853706.png)到sys.path中**
