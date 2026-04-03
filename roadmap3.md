# ⚡🤖 CUDA + ML Systems + Robotics Roadmap
### Study After: 360-Day ML Roadmap + 230-Day Hardware/OS Roadmap
### Daily Commitment: 3–4 hours/day

> 🔥 = Critical concept — must master deeply
> ⭐ = Connects to previous roadmaps
> 🛠️ = Project day
> 🔁 = Revision day
> 🎮 = GPU / CUDA specific
> 🤖 = Robotics specific

---

## 📌 OVERVIEW

| Phase | Topic | Days |
|---|---|---|
| 1 | CUDA Deep — GPU Programming | 1–30 |
| 2 | Triton — Python GPU Programming | 31–45 |
| 3 | cuBLAS + cuDNN + Library Internals | 46–55 |
| 4 | TensorRT — Production Inference | 56–70 |
| 5 | Custom PyTorch Operators | 71–85 |
| 6 | Distributed Systems for ML | 86–110 |
| 7 | Compiler Theory (MLIR + LLVM) | 111–135 |
| 8 | Ray — Distributed Python + ML | 136–150 |
| 9 | MLOps + Production ML | 151–170 |
| 10 | Robotics Math + Theory | 171–195 |
| 11 | ROS2 Deep | 196–225 |
| 12 | Robot Perception (CV + Sensors) | 226–250 |
| 13 | Robot Learning + RL Deep | 251–280 |
| 14 | Sim-to-Real + Advanced Robotics | 281–310 |
| 15 | Capstone Projects | 311–320 |

**Total: 320 days**

---
---

# 🎮 PHASE 1 — CUDA DEEP (Day 1–30)
### 🎯 Goal: Write real GPU kernels, not just call PyTorch ops

---

### 📅 Day 1 — CUDA Review + Setup 🔥🎮
- Full CUDA toolkit setup (nvcc, cuda-gdb, nsight)
- Verify GPU specs: SM count, VRAM, compute capability
- Review from hardware roadmap: SM, warps, memory hierarchy ⭐
- First CUDA program: vector addition end-to-end
- Understanding compilation pipeline (`nvcc` → PTX → SASS)
- Device query — reading GPU properties programmatically

### 📅 Day 2 — Thread Hierarchy Deep 🔥🎮
- Threads, warps, blocks, grids — revisit with code
- 1D, 2D, 3D thread blocks
- Thread indexing patterns 🔥
- `threadIdx`, `blockIdx`, `blockDim`, `gridDim`
- Choosing block size — rules of thumb
- Grid-stride loops 🔥 — handling arbitrary data sizes

### 📅 Day 3 — CUDA Memory Deep (Part 1) 🔥🎮
- Global memory — coalesced vs uncoalesced access 🔥
- Coalescing rules for different data types
- Shared memory — declaration, usage, bank conflicts 🔥
- `__shared__` — static vs dynamic allocation
- `__syncthreads()` — when and why 🔥
- Registers — automatic allocation, spilling

### 📅 Day 4 — CUDA Memory Deep (Part 2) 🔥🎮
- Constant memory — `__constant__`, broadcast reads
- Texture memory — spatial locality cache
- L1/L2 cache control (`__launch_bounds__`)
- Unified Memory (`cudaMallocManaged`) ⭐
- Pinned memory (`cudaMallocHost`) ⭐
- Peer-to-peer memory access (multi-GPU)

### 📅 Day 5 — CUDA Streams + Async 🔥🎮
- CUDA streams — concurrent kernel execution
- Default stream vs non-default streams
- `cudaStreamCreate`, `cudaStreamDestroy`
- `cudaMemcpyAsync` — overlapping compute + transfer
- Stream synchronization (`cudaStreamSynchronize`)
- CUDA events for timing 🔥
- How PyTorch uses streams internally ⭐

### 📅 Day 6 — Warp-Level Programming 🔥🎮
- Warp divergence — how it kills performance 🔥
- Warp vote functions (`__all_sync`, `__any_sync`, `__ballot_sync`)
- Warp shuffle instructions 🔥🎮
  - `__shfl_sync`, `__shfl_up_sync`, `__shfl_down_sync`
  - `__shfl_xor_sync`
- Warp-level reduction without shared memory 🔥
- Cooperative groups (intro) ⭐

### 📅 Day 7 — Reduction Kernel 🔥🎮
- Naive reduction — why it's slow
- Optimizing step by step:
  1. Divergence-free reduction
  2. Bank conflict elimination
  3. Idle thread reduction
  4. Unrolling last warp
  5. Template unrolling
  6. Warp shuffle reduction
- Final optimized reduction kernel
- Benchmarking each step

### 📅 Day 8 — Matrix Multiply (GEMM) from Scratch 🔥🎮
- Naive matrix multiply kernel
- Shared memory tiling 🔥🎮
- Tile size selection
- Double buffering (prefetching) 🔥
- Handling non-square matrices
- Benchmarking vs cuBLAS — understanding the gap

### 📅 Day 9 — GEMM Optimization Deep 🔥🎮
- Register tiling (thread-level tiling) 🔥
- 2D register tiles
- Vectorized loads (`float4`) 🔥
- Memory layout optimization (column vs row major)
- Padding for bank conflict avoidance
- Reaching 60-80% of cuBLAS performance

### 📅 Day 10 — Tensor Core Programming 🔥🎮
- WMMA API (Warp Matrix Multiply Accumulate) 🔥🎮
- `nvcuda::wmma` namespace
- Fragment types (matrix_a, matrix_b, accumulator)
- `load_matrix_sync`, `mma_sync`, `store_matrix_sync`
- Supported shapes and types (FP16, BF16, INT8)
- WMMA GEMM kernel
- Performance vs non-Tensor Core version

### 📅 Day 11 — Softmax Kernel 🔥🎮
- Naive softmax — numerical instability problem
- Safe softmax (max subtraction) 🔥
- Online softmax (single-pass) 🔥
- Warp-level softmax
- Block-level softmax with shared memory
- Fused softmax + scale
- Benchmarking vs PyTorch

### 📅 Day 12 — Layer Normalization Kernel 🔥🎮
- LayerNorm math review ⭐
- Two-pass vs online algorithm
- Warp reduction for mean + variance
- Numerically stable implementation
- Fused backward pass concept
- Why fused kernels matter for transformers ⭐🎮

### 📅 Day 13 — Convolution Kernel 🔥🎮
- Direct convolution kernel
- Im2col approach
- Shared memory tiling for convolution
- Winograd convolution concept
- FFT-based convolution concept
- Why cuDNN uses different algorithms ⭐

### 📅 Day 14 — Attention Kernel (Part 1) 🔥🎮
- Naive attention kernel — memory analysis
- Why naive attention is O(n²) memory 🔥
- Tiled attention — block-wise computation
- Online softmax in attention 🔥
- Memory-efficient attention algorithm

### 📅 Day 15 — FlashAttention Implementation 🔥🎮
- FlashAttention algorithm from scratch 🔥🎮
- Forward pass implementation
- Backward pass — recomputation strategy
- HBM access analysis 🔥
- SRAM tiling strategy 🔥
- Comparing with naive attention memory usage
- FlashAttention-2 improvements ⭐

### 📅 Day 16 — CUDA Graphs 🔥🎮
- Why CUDA graphs exist (kernel launch overhead)
- Graph capture (`cudaStreamBeginCapture`)
- Graph instantiation + replay
- When to use CUDA graphs
- How PyTorch uses CUDA graphs ⭐🎮
- `torch.cuda.make_graphed_callables` ⭐

### 📅 Day 17 — Cooperative Groups 🔥🎮
- `cooperative_groups` namespace
- Thread block groups
- Grid-level groups
- Multi-grid groups (multi-GPU)
- Tiled partitions
- Cooperative kernel launch
- Use cases in ML kernels

### 📅 Day 18 — Atomic Operations Deep 🔥🎮
- `atomicAdd`, `atomicMax`, `atomicCAS`
- Atomic performance — when they hurt
- Lock-free histogram kernel
- Atomic + warp reduction hybrid
- FP16/BF16 atomic support ⭐🎮
- Atomic patterns in ML (gradient accumulation)

### 📅 Day 19 — Memory Optimization Techniques 🔥🎮
- Memory access pattern analysis
- Vectorized memory access (`float2`, `float4`) 🔥
- Structure of Arrays vs Array of Structures ⭐
- Memory bandwidth roofline ⭐
- L2 cache persistence (`cudaAccessPolicyWindow`)
- Prefetching with async copy (`cp.async`) 🔥

### 📅 Day 20 — `cp.async` + Pipeline Programming 🔥🎮
- Asynchronous copy from global to shared
- `__pipeline_memcpy_async`
- Software pipelining — overlapping compute + load
- Double buffering with async copy 🔥
- `cuda::pipeline` interface
- Applying to GEMM kernel

### 📅 Day 21 — CUDA Debugging 🔥🎮
- `cuda-gdb` — GPU debugging
- `printf` in kernels
- `assert` in kernels
- `cuda-memcheck` (now Compute Sanitizer)
- `compute-sanitizer --tool memcheck`
- Race condition detection
- Out-of-bounds detection

### 📅 Day 22 — CUDA Profiling Deep 🔥🎮
- Nsight Compute deep 🔥🎮
- Key metrics: achieved occupancy, memory throughput, SM efficiency
- Roofline in Nsight Compute ⭐
- Source correlation — bottleneck to code line
- Nsight Systems — system-level timeline
- `ncu` command line profiler
- Profiling PyTorch custom ops ⭐

### 📅 Day 23 — Occupancy Optimization 🔥🎮
- Occupancy calculator
- `__launch_bounds__` decorator
- Register usage control
- Shared memory vs occupancy tradeoff 🔥
- Auto-tuning block sizes
- `cudaOccupancyMaxPotentialBlockSize` API

### 📅 Day 24 — Multi-GPU CUDA 🔥🎮
- Peer-to-peer access (`cudaDeviceEnablePeerAccess`)
- Direct GPU-to-GPU memory copy
- Unified addressing
- CUDA IPC (Inter-Process Communication)
- Multi-GPU reduction kernel
- NVLink usage from CUDA ⭐

### 📅 Day 25 — CUDA + Python Integration 🔥🎮
- `pycuda` — CUDA from Python
- `numba.cuda` — JIT CUDA kernels in Python ⭐
- CuPy — NumPy on GPU ⭐
- Calling custom CUDA from PyTorch (`torch.utils.cpp_extension`) ⭐
- `ctypes` + CUDA shared libraries

### 📅 Day 26 — PTX + SASS (Assembly Level) 🔥🎮
- PTX — virtual ISA
- Reading PTX output (`nvcc -ptx`)
- SASS — actual GPU assembly
- `cuobjdump --dump-sass`
- Inline PTX in CUDA C++
- Understanding compiler decisions
- Manual optimization with PTX

### 📅 Day 27 — Advanced GEMM Techniques 🎮
- CUTLASS library intro ⭐🎮
- CUTLASS abstractions (tile iterators, epilogues)
- Using CUTLASS for custom GEMM
- Epilogue fusion (GEMM + activation)
- Split-K GEMM for small batch sizes
- Batched GEMM (`cublasGemmBatchedEx`)

### 📅 Day 28 — Sparse Operations on GPU 🎮
- Sparse matrix formats (CSR, CSC, COO)
- cuSPARSE library
- Sparse GEMM
- Structured sparsity (2:4) ⭐🎮
- Sparse attention concepts
- When sparse ops help (and when they don't)

### 📅 Day 29 — CUDA Practice Day
- Implement 5 kernels from scratch
- Profile each one
- Optimize each to near-roofline performance
- Document optimization decisions

### 📅 Day 30 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 1: High-Performance Attention Library 🎮
- Implement FlashAttention forward + backward
- Fused softmax + attention
- Multi-head support
- BF16/FP16 support
- Tensor Core utilization
- Benchmark vs PyTorch `F.scaled_dot_product_attention`
- Python bindings via `torch.utils.cpp_extension`

---
---

# 🐍 PHASE 2 — TRITON — PYTHON GPU PROGRAMMING (Day 31–45)
### 🎯 Goal: Write production GPU kernels in Python

---

### 📅 Day 31 — Triton Intro + Philosophy 🔥🎮
- What Triton is — blocked programming model
- Triton vs CUDA differences 🔥
- `@triton.jit` decorator ⭐
- Triton's tile-based abstraction
- Auto-tuning built-in 🔥
- How `torch.compile` generates Triton ⭐
- Installing + first kernel

### 📅 Day 32 — Triton Basics 🔥🎮
- Programs, blocks, tiles
- `tl.load`, `tl.store`
- `tl.arange`, `tl.zeros`
- Masking — handling boundaries 🔥
- `tl.program_id`
- Vector addition in Triton

### 📅 Day 33 — Triton Memory Model 🔥🎮
- Blocked memory access
- Pointer arithmetic in Triton
- 2D pointers + strides 🔥
- `tl.load` with mask
- Cache hints (`tl.load(eviction_policy=...)`)
- Memory coalescing in Triton

### 📅 Day 34 — Triton Reductions + Math 🔥🎮
- `tl.sum`, `tl.max`, `tl.min`
- `tl.dot` — Tensor Core matrix multiply 🔥🎮
- `tl.math.*` — math functions
- `tl.where` — conditional
- `tl.atomic_add`, `tl.atomic_max`
- Implementing reduction in Triton

### 📅 Day 35 — Triton GEMM 🔥🎮
- Matrix multiply in Triton
- 2D program grid
- Shared memory via `tl.dot`
- Block size tuning
- `tl.constexpr` for compile-time constants
- Benchmarking vs cuBLAS

### 📅 Day 36 — Triton Auto-tuning 🔥🎮
- `@triton.autotune` decorator 🔥
- Config objects (`triton.Config`)
- Key parameters for tuning
- `num_warps`, `num_stages`
- Pipeline stages for memory latency hiding 🔥
- Auto-tune GEMM kernel

### 📅 Day 37 — Triton Softmax + LayerNorm 🔥🎮
- Fused softmax in Triton
- Online softmax algorithm ⭐
- LayerNorm forward in Triton
- Fusing operations — why it matters 🔥
- Backward pass in Triton

### 📅 Day 38 — Triton FlashAttention 🔥🎮
- FlashAttention in Triton ⭐🎮
- Reading the original Triton FA implementation
- Forward pass step by step
- Causal masking in Triton
- Multi-head support
- Understanding every line

### 📅 Day 39 — Triton for Custom Activations 🎮
- Fused activation kernels
- GELU, SiLU, Swish in Triton
- Fused bias + activation
- Element-wise kernel patterns
- `tl.sigmoid`, `tl.exp`, `tl.log`
- Benchmarking fused vs unfused

### 📅 Day 40 — Triton Backward Passes 🔥🎮
- Writing backward kernels in Triton
- Gradient computation
- Atomic gradient accumulation
- Fused forward + backward
- Integration with PyTorch autograd 🔥

### 📅 Day 41 — Triton Debugging + Profiling 🔥🎮
- `triton.testing.perf_report`
- Benchmarking utilities
- Nsight + Triton
- Interpreting Triton PTX output
- Common bugs + fixes

### 📅 Day 42 — `torch.compile` + Triton Integration ⭐🔥🎮
- How `torch.compile` lowers to Triton
- Dynamo graph capture ⭐🎮
- Inductor backend ⭐🎮
- Custom Triton kernels in `torch.compile` graph
- `torch._inductor` internals intro
- When `torch.compile` beats hand-written kernels

### 📅 Day 43 — Advanced Triton Patterns 🎮
- Persistent kernels
- Stream-K algorithm in Triton
- Grouped GEMM in Triton
- Mixture of Experts (MoE) kernel patterns ⭐
- Sparse operations in Triton

### 📅 Day 44 — Triton Practice
- Implement 5 production kernels in Triton
- Full auto-tuning for each
- PyTorch integration for all

### 📅 Day 45 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 2: Triton Kernel Library 🎮
- Fused GELU + linear
- Fused LayerNorm + dropout
- Optimized cross-entropy loss
- Fused AdamW optimizer step
- All with auto-tuning
- Drop-in replacements for PyTorch ops
- Full benchmarks + documentation

---
---

# 📚 PHASE 3 — cuBLAS + cuDNN + LIBRARY INTERNALS (Day 46–55)

---

### 📅 Day 46 — cuBLAS Deep 🔥🎮
- cuBLAS API overview
- GEMM variants (`cublasSgemm`, `cublasHgemm`)
- `cublasGemmEx` — mixed precision 🔥🎮
- `cublasGemmStridedBatchedEx` — batched GEMM
- Tensor Core GEMM (`CUBLAS_COMPUTE_32F_FAST_16F`)
- Algorithm selection
- How PyTorch calls cuBLAS ⭐

### 📅 Day 47 — cuBLAS Advanced 🎮
- cuBLASLt — lightweight API 🔥🎮
- Matrix layout descriptors
- Operation descriptors
- Algorithm search + caching
- Epilogue fusions in cuBLASLt ⭐🎮
- Activation fused with GEMM
- cuBLASLt vs cuBLAS comparison

### 📅 Day 48 — cuDNN Deep 🔥🎮
- cuDNN architecture
- Tensor descriptors
- Convolution descriptors + algorithm selection
- `cudnnFindConvolutionForwardAlgorithm`
- Workspace memory management
- cuDNN v8 graph API 🔥🎮
- Operation graphs — fusing ops ⭐🎮

### 📅 Day 49 — cuDNN Graph API 🔥🎮
- Building operation graphs
- Fusing convolution + bias + activation
- Fusing attention operations
- Engine + execution plan selection
- How PyTorch uses cuDNN graphs ⭐🎮
- Performance benefits of fusion

### 📅 Day 50 — cuFFT + cuRAND 🎮
- cuFFT — GPU FFT library
- 1D, 2D, 3D FFT on GPU
- Batched FFT
- cuRAND — GPU random number generation
- Different RNG algorithms
- Use cases in ML (noise, augmentation)

### 📅 Day 51 — NCCL Deep 🔥🎮
- NCCL architecture ⭐
- Collective operations in detail:
  - AllReduce 🔥🎮
  - AllGather 🔥🎮
  - ReduceScatter 🔥🎮
  - Broadcast, Reduce
- Ring algorithm implementation
- Tree algorithm
- NCCL topology detection (NVLink vs PCIe)
- How PyTorch DDP uses NCCL ⭐🎮

### 📅 Day 52 — NCCL Advanced 🔥🎮
- NCCL communicator creation
- Multi-node NCCL
- NCCL + CUDA streams
- Overlapping NCCL + compute 🔥🎮
- NCCL debugging (`NCCL_DEBUG=INFO`)
- Common NCCL issues + fixes
- NCCL profiling with Nsight

### 📅 Day 53 — Reading PyTorch Internals ⭐🔥🎮
- PyTorch ATen library structure
- Dispatcher — how ops are routed
- Finding where `torch.matmul` calls cuBLAS 🔥
- CUDA kernels in PyTorch source
- Reading `aten/src/ATen/native/cuda/`
- Understanding PyTorch operator registration

### 📅 Day 54 — Library Integration Practice 🎮
- Call cuBLAS from Python via ctypes
- Build cuBLAS-backed linear layer
- Compare: pure CUDA vs cuBLAS vs Triton vs PyTorch
- Full performance comparison table

### 📅 Day 55 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 3: Custom Linear Layer with Full Stack 🎮
- cuBLASLt GEMM backend
- Fused activation (cuDNN graph)
- NCCL AllReduce for gradient sync
- Triton backward pass
- Benchmark vs `nn.Linear`
- Drop-in `nn.Module` replacement

---
---

# ⚡ PHASE 4 — TENSORRT — PRODUCTION INFERENCE (Day 56–70)

---

### 📅 Day 56 — TensorRT Overview 🔥🎮
- What TensorRT does ⭐
- Inference optimization pipeline
- Network definition + builder + engine
- Precision modes (FP32, FP16, INT8, FP8) 🔥🎮
- Layer fusion 🔥
- Kernel auto-tuning
- TensorRT vs `torch.compile` vs ONNX Runtime

### 📅 Day 57 — TensorRT Python API 🔥🎮
- `tensorrt` Python package
- Building network with `INetworkDefinition`
- Builder config — precision, workspace
- Engine serialization + deserialization
- Inference with `IExecutionContext`
- Dynamic shapes 🔥🎮

### 📅 Day 58 — ONNX → TensorRT Pipeline ⭐🔥🎮
- Exporting PyTorch → ONNX ⭐
- `trtexec` tool — command line conversion
- `onnx_graphsurgeon` — editing ONNX graphs
- Parsing ONNX in TensorRT
- Handling unsupported ops
- Validating TRT output vs PyTorch

### 📅 Day 59 — TensorRT INT8 Quantization 🔥🎮
- Post-training quantization (PTQ) 🔥🎮
- Calibration — dataset + algorithms
- Calibration cache
- INT8 accuracy vs FP16 tradeoffs
- Per-tensor vs per-channel quantization
- QAT (Quantization-Aware Training) concept ⭐

### 📅 Day 60 — TensorRT Plugins 🔥🎮
- Custom TensorRT plugins
- `IPluginV2DynamicExt` interface
- Registering custom ops
- FlashAttention as TRT plugin
- Plugin serialization
- When to write plugins vs use built-in ops

### 📅 Day 61 — Torch-TensorRT ⭐🎮
- `torch_tensorrt` — PyTorch native TRT
- Compiling with `torch_tensorrt.compile`
- `torch.compile` + TensorRT backend ⭐🎮
- Dynamic shapes in Torch-TensorRT
- Fallback to PyTorch for unsupported ops
- Benchmarking end-to-end

### 📅 Day 62 — TensorRT for LLMs 🔥🎮
- TensorRT-LLM library ⭐🎮
- In-flight batching ⭐🎮
- KV cache optimization 🔥🎮
- Paged KV cache ⭐🎮
- Speculative decoding in TRT-LLM ⭐
- Quantization for LLMs (AWQ, GPTQ) ⭐🎮

### 📅 Day 63 — TensorRT for CV Models 🎮
- Optimizing YOLO with TensorRT ⭐
- Optimizing ViT with TensorRT ⭐
- Batch size optimization
- Multi-stream inference
- Pre/post-processing on GPU

### 📅 Day 64 — Triton Inference Server ⭐🎮
- NVIDIA Triton (inference server, not the language)
- Model repository format
- Backends (TensorRT, ONNX, PyTorch, TF)
- Dynamic batching ⭐🎮
- Concurrent model execution
- gRPC + HTTP API
- `perf_analyzer` for benchmarking

### 📅 Day 65 — vLLM Internals ⭐🔥🎮
- vLLM architecture deep ⭐🎮
- PagedAttention internals 🔥🎮
- Memory manager — block tables
- Continuous batching implementation ⭐🎮
- Preemption + recomputation
- Custom attention backends
- Reading vLLM source code

### 📅 Day 66 — Inference Optimization Patterns 🔥🎮
- KV cache — memory layout + optimization 🔥🎮
- Speculative decoding — algorithm + implementation ⭐🎮
- Medusa heads ⭐
- Batching strategies (static, dynamic, continuous)
- Tensor parallelism for inference 🔥🎮
- Pipeline parallelism for inference

### 📅 Day 67 — Quantization Deep 🔥🎮
- GPTQ — algorithm + implementation ⭐🎮
- AWQ — activation-aware quantization ⭐🎮
- SmoothQuant ⭐
- FP8 quantization (H100) ⭐🎮
- `bitsandbytes` internals ⭐🎮
- Quantization error analysis

### 📅 Day 68 — Edge Inference 🎮
- ONNX Runtime — cross-platform inference
- TensorFlow Lite concept
- CoreML (Apple) concept
- OpenVINO (Intel) concept
- Pruning + distillation for edge 🔥
- Robot edge inference (Jetson) 🤖🎮

### 📅 Day 69 — Inference Benchmarking 🔥🎮
- Metrics: latency, throughput, memory, power
- `trtexec` benchmarking
- `perf_analyzer`
- Building your own benchmark suite
- Comparing: PyTorch → ONNX → TRT → vLLM

### 📅 Day 70 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 4: Production Inference Pipeline 🎮
- PyTorch model → ONNX → TensorRT
- INT8 calibration
- Triton Inference Server deployment
- Dynamic batching
- Benchmark: latency + throughput
- Python client

---
---

# 🔧 PHASE 5 — CUSTOM PYTORCH OPERATORS (Day 71–85)

---

### 📅 Day 71 — PyTorch Extension System 🔥⭐🎮
- `torch.utils.cpp_extension` ⭐🎮
- `CppExtension` vs `CUDAExtension`
- `load_inline` — JIT compilation
- `setup.py` for extensions
- `torch.ops` — operator registration
- Extension loading + caching

### 📅 Day 72 — C++ ATen Operators 🔥⭐
- ATen tensor API in C++
- `at::Tensor`, `at::TensorOptions`
- CPU operator in C++
- Testing C++ operator from Python
- Type dispatch (`AT_DISPATCH_FLOATING_TYPES`)
- Error handling in C++ ops

### 📅 Day 73 — CUDA Extension Basics 🔥🎮
- Writing CUDA kernel + C++ wrapper
- `AT_DISPATCH_FLOATING_TYPES_AND_HALF`
- Launching kernels from C++
- Memory management with ATen
- `CHECK_CUDA`, `CHECK_CONTIGUOUS` macros
- First custom CUDA op end-to-end

### 📅 Day 74 — Custom Autograd Function 🔥⭐🎮
- `torch.autograd.Function` ⭐
- `forward` + `backward` static methods
- `ctx.save_for_backward`
- `ctx.saved_tensors`
- Custom gradient computation
- Connecting CUDA kernel to autograd graph 🔥

### 📅 Day 75 — Operator Registration 🔥⭐🎮
- `TORCH_LIBRARY` macro
- `TORCH_LIBRARY_IMPL`
- Dispatch keys (CPU, CUDA, AutogradCUDA)
- Schema definition
- `torch.ops.my_namespace.my_op`
- Operator visibility + packaging

### 📅 Day 76 — Custom Fused Operators 🔥🎮
- Fused bias + LayerNorm operator
- Fused dropout + residual + LayerNorm
- Rotary Position Embedding (RoPE) kernel ⭐
- SwiGLU activation kernel ⭐
- Why fusion matters — memory bandwidth ⭐🎮

### 📅 Day 77 — `torch.compile` Compatible Ops 🔥⭐🎮
- Writing ops compatible with `torch.compile` ⭐🎮
- Fake tensor implementation
- Abstract impl for shape inference
- Custom ops in Dynamo graph
- Testing with `torch.compile`
- Common compatibility issues

### 📅 Day 78 — Custom CUDA Kernels for Transformers 🔥🎮
- Rotary embeddings (RoPE) CUDA kernel ⭐
- ALiBi positional bias kernel ⭐
- Fused QKV projection
- Fused MLP (SwiGLU) kernel ⭐
- Integrating into HuggingFace models ⭐

### 📅 Day 79 — Memory-Efficient Operations 🔥🎮
- Gradient checkpointing custom op ⭐🎮
- Activation recomputation patterns
- Memory-efficient cross entropy
- In-place operations safety
- Custom memory pool integration

### 📅 Day 80 — Testing Custom Ops 🔥⭐
- `torch.testing.assert_close`
- Gradient checking (`torch.autograd.gradcheck`)
- Numerical precision testing
- Performance regression tests
- CI for CUDA extensions

### 📅 Day 81 — Pybind11 + Python Bindings 🔥
- Pybind11 for complex C++ objects
- Binding classes to Python
- NumPy ↔ C++ array interop
- Error handling across C++/Python boundary
- GIL management

### 📅 Day 82 — Advanced Extension Patterns 🎮
- Multi-GPU operators
- Operator versioning
- Backward compatibility
- Packaging CUDA extensions (wheels)
- Publishing to PyPI

### 📅 Day 83–84 — Practice: Build Full Custom Op Suite 🎮
- RoPE + FlashAttention as custom ops
- Fused optimizer (AdamW) kernel
- Fused cross entropy
- All `torch.compile` compatible
- Full test suite

### 📅 Day 85 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 5: Flash Transformer Block ⭐🎮
- Full transformer block as custom ops
- FlashAttention CUDA kernel
- Fused LayerNorm
- Fused SwiGLU MLP
- RoPE kernel
- All autograd compatible
- `torch.compile` compatible
- 2x+ faster than vanilla PyTorch transformer

---
---

# 🌐 PHASE 6 — DISTRIBUTED SYSTEMS FOR ML (Day 86–110)

---

### 📅 Day 86 — Distributed Systems Fundamentals 🔥
- Why distributed systems are hard
- CAP theorem 🔥
- Consistency models
- Fault tolerance basics
- Leader election
- Consensus (Raft concept)
- How these apply to ML training ⭐🎮

### 📅 Day 87 — Distributed ML Overview 🔥🎮
- Data parallelism deep 🔥🎮
- Model parallelism deep 🔥🎮
- Tensor parallelism 🔥🎮
- Pipeline parallelism 🔥🎮
- Sequence parallelism ⭐🎮
- Expert parallelism (MoE) ⭐🎮
- Hybrid parallelism strategies

### 📅 Day 88 — PyTorch DDP Internals 🔥⭐🎮
- DDP algorithm — gradient bucketing 🔥🎮
- AllReduce overlap with backward pass 🔥🎮
- Gradient compression
- `find_unused_parameters` — what it costs
- DDP + mixed precision
- DDP debugging

### 📅 Day 89 — FSDP (Fully Sharded Data Parallel) 🔥⭐🎮
- ZeRO paper — stages 1, 2, 3 🔥🎮
- FSDP implementation in PyTorch ⭐🎮
- `FullyShardedDataParallel` API
- Sharding strategies
- Mixed precision with FSDP
- CPU offloading ⭐🎮
- FSDP vs DDP — when to use which

### 📅 Day 90 — Tensor Parallelism 🔥🎮
- Megatron-LM tensor parallelism 🔥🎮
- Column parallel linear
- Row parallel linear
- Attention head parallelism
- Sequence parallelism
- `torch.distributed` primitives for TP

### 📅 Day 91 — Pipeline Parallelism 🔥🎮
- Naive pipeline — bubble problem 🔥🎮
- GPipe — micro-batching 🔥🎮
- PipeDream — 1F1B schedule 🔥🎮
- Interleaved pipeline schedule ⭐🎮
- Activation memory in pipeline
- `torch.distributed.pipeline`

### 📅 Day 92 — `torch.distributed` Deep 🔥⭐🎮
- Process groups
- `dist.init_process_group`
- Point-to-point: `send`, `recv`, `isend`, `irecv`
- Collectives: `all_reduce`, `all_gather`, `reduce_scatter`
- Async collectives
- Process group backends (NCCL, Gloo, MPI)

### 📅 Day 93 — Multi-Node Training Setup 🔥🎮
- Multi-node `torchrun` ⭐🎮
- `MASTER_ADDR`, `MASTER_PORT`, `WORLD_SIZE`, `RANK`
- Node failure handling
- Elastic training (`torch.distributed.elastic`) ⭐🎮
- Checkpoint + resume strategies 🔥🎮
- Slurm cluster basics ⭐🎮

### 📅 Day 94 — Gradient Communication Optimization 🔥🎮
- Gradient compression (PowerSGD) ⭐🎮
- Gradient sparsification
- 1-bit Adam ⭐
- Overlap communication with computation 🔥🎮
- Bucket size tuning
- NCCL stream scheduling

### 📅 Day 95 — Memory Optimization for Large Models 🔥🎮
- ZeRO-Offload ⭐🎮
- ZeRO-Infinity ⭐🎮
- CPU Adam optimizer ⭐🎮
- Activation checkpointing ⭐🎮
- Mixed precision memory analysis
- Memory profiling distributed training

### 📅 Day 96 — DeepSpeed 🔥⭐🎮
- DeepSpeed overview ⭐🎮
- ZeRO integration ⭐🎮
- DeepSpeed config JSON
- DeepSpeed + HuggingFace Trainer ⭐🎮
- Sparse attention in DeepSpeed
- DeepSpeed inference ⭐🎮

### 📅 Day 97 — Megatron-LM 🔥🎮
- Megatron-LM architecture
- 3D parallelism (DP + TP + PP) 🔥🎮
- Megatron data loading
- Sequence parallelism ⭐🎮
- Distributed checkpointing
- Megatron-Core ⭐🎮

### 📅 Day 98 — Distributed Checkpointing 🔥🎮
- `torch.distributed.checkpoint` ⭐🎮
- Sharded checkpoints
- Async checkpointing ⭐🎮
- Checkpoint resharding (change parallelism)
- Fault-tolerant training
- `torch.distributed.elastic` ⭐🎮

### 📅 Day 99 — Communication Libraries 🎮
- MPI basics (OpenMPI)
- MPI vs NCCL — when to use each
- Gloo backend — CPU fallback
- UCX — unified communication framework
- RDMA in distributed training ⭐

### 📅 Day 100 — Distributed Data Loading 🔥🎮
- Data sharding strategies
- `DistributedSampler` ⭐🎮
- WebDataset for distributed training ⭐🎮
- Data loading as bottleneck ⭐🎮
- Streaming datasets at scale ⭐🎮
- Storage systems (NFS, Lustre, S3)

### 📅 Day 101 — Large-Scale Training Infrastructure 🔥🎮
- GPU cluster topology
- Spine-leaf network architecture
- Job scheduling (Slurm, Kubernetes) ⭐🎮
- Gang scheduling for ML
- Preemption handling
- Cost optimization

### 📅 Day 102 — Distributed Training Debugging 🔥🎮
- NCCL hangs — causes + fixes
- Gradient explosion in distributed training
- OOM in distributed settings
- Profiling distributed jobs
- `torch.distributed.breakpoint()` ⭐
- Logging in distributed training

### 📅 Day 103 — Mixture of Experts (MoE) Parallelism ⭐🎮
- MoE architecture review ⭐
- Expert parallelism 🔥🎮
- All-to-all communication 🔥🎮
- Load balancing across experts
- MoE + TP + DP combination
- Megablocks / Switch Transformer

### 📅 Day 104–106 — Distributed Training Practice 🎮
- Train GPT-2 scale model with DDP
- Scale to FSDP
- Add tensor parallelism
- Profile at each stage
- Document scaling efficiency

### 📅 Day 107–109 — Distributed Systems Theory 🔥
- Lamport clocks
- Vector clocks
- Distributed consensus (Raft deep)
- Fault tolerance patterns
- Two-phase commit
- How these apply to parameter servers

### 📅 Day 110 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 6: Distributed Training Framework 🎮
- Custom training loop with DDP + FSDP
- Tensor parallelism for transformer
- Distributed checkpointing
- Gradient compression
- Multi-node support
- Full profiling + scaling report

---
---

# 🔨 PHASE 7 — COMPILER THEORY + MLIR + LLVM (Day 111–135)

---

### 📅 Day 111 — Compiler Theory Basics 🔥
- Compilation pipeline overview ⭐
- Lexer → Parser → AST → IR → Codegen
- SSA (Static Single Assignment) form 🔥
- Basic blocks + control flow graphs
- Dominance + dominator trees
- Why ML uses compilers 🔥🎮

### 📅 Day 112 — LLVM Overview 🔥
- LLVM IR — the universal IR
- LLVM IR syntax + semantics
- Types, values, instructions
- `clang` → LLVM IR (`-emit-llvm`)
- Reading LLVM IR
- LLVM pass pipeline

### 📅 Day 113 — LLVM IR Deep 🔥
- Functions, basic blocks, phi nodes
- Memory model (`alloca`, `load`, `store`)
- Control flow (`br`, `switch`)
- LLVM type system
- Metadata + debug info
- Writing simple LLVM IR by hand

### 📅 Day 114 — LLVM Passes 🔥
- Pass manager
- Analysis passes vs transformation passes
- Common passes: mem2reg, instcombine, GVN, LICM
- Writing a simple LLVM pass
- Pass ordering matters
- How `clang -O2` selects passes

### 📅 Day 115 — LLVM Backend 🔥🎮
- SelectionDAG — IR to machine code
- Instruction selection
- Register allocation
- Target-specific passes
- How NVCC uses LLVM for PTX ⭐🎮
- LLVM → PTX pipeline

### 📅 Day 116 — MLIR Introduction 🔥🎮
- Why MLIR exists — multi-level IR 🔥🎮
- Dialects — the key concept 🔥
- Ops, types, attributes, regions, blocks
- MLIR vs LLVM differences
- Progressive lowering 🔥🎮
- Why ML compilers use MLIR 🔥🎮

### 📅 Day 117 — MLIR Dialects for ML 🔥🎮
- `linalg` dialect — named ops for linear algebra 🔥🎮
- `tensor` dialect — immutable tensors
- `memref` dialect — memory references
- `arith` dialect — arithmetic
- `func` dialect — functions
- `scf` dialect — structured control flow

### 📅 Day 118 — MLIR Transformations 🔥🎮
- Tiling (`linalg.tile`) 🔥🎮
- Fusion (`linalg.fuse`) 🔥🎮
- Vectorization (`linalg` → `vector` dialect)
- Bufferization (tensor → memref) 🔥🎮
- Loop transformations
- How these map to GPU optimizations ⭐🎮

### 📅 Day 119 — XLA (Accelerated Linear Algebra) 🔥🎮
- XLA overview — JAX's compiler ⭐🎮
- HLO (High Level Operations) IR
- XLA fusion rules
- XLA → LLVM/PTX pipeline
- HLO optimizations (layout assignment, rematerialization)
- JAX JIT → XLA compilation ⭐

### 📅 Day 120 — `torch.compile` Internals Deep 🔥⭐🎮
- Dynamo — graph capture 🔥⭐🎮
- Symbolic shapes
- Guards + re-compilation
- Inductor backend 🔥⭐🎮
- Inductor → Triton lowering ⭐🎮
- Inductor → C++/OpenMP lowering
- Reading Inductor source code

### 📅 Day 121 — TorchScript + TorchFX 🔥⭐🎮
- TorchScript — eager to graph 🔥⭐
- `torch.jit.script` vs `torch.jit.trace`
- TorchFX — Python-level graph transforms ⭐🎮
- FX graph representation
- Writing FX passes (quantization, fusion)
- FX → custom backends

### 📅 Day 122 — Quantization via Compiler 🔥🎮
- Quantization as compiler pass 🔥🎮
- `torch.ao.quantization` ⭐🎮
- FX graph mode quantization ⭐🎮
- Quantization-aware training via FX
- ONNX quantization tools
- TensorRT quantization ⭐🎮

### 📅 Day 123 — Graph Optimization Passes 🔥🎮
- Constant folding
- Dead code elimination
- Common subexpression elimination
- Layout optimization (NCHW vs NHWC) 🔥🎮
- Operator fusion patterns
- Writing a custom FX pass

### 📅 Day 124 — IREE Compiler ⭐🎮
- IREE — ML compiler for edge/mobile ⭐
- IREE compilation pipeline
- HAL (Hardware Abstraction Layer)
- IREE + MLIR connection
- Deploying models with IREE
- Robotics edge inference ⭐🤖🎮

### 📅 Day 125 — Writing a Simple ML Compiler 🔥🎮
- Define a tiny IR for tensor ops
- Implement passes: fusion, tiling
- Lower to LLVM IR
- JIT compile + execute
- This is what `torch.compile` does at a high level ⭐🎮

### 📅 Day 126–130 — Compiler Deep Practice 🔥
- Write 3 LLVM passes
- Write MLIR dialect + transformation
- Trace `torch.compile` on a small model end-to-end
- Read + understand Inductor source for matmul

### 📅 Day 131–134 — Compiler Theory Extras
- Polyhedral model for loop optimization 🔥🎮
- Affine transformations
- Dependence analysis
- Auto-parallelization
- Connection to MLIR affine dialect

### 📅 Day 135 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 7: Tensor Compiler Pass ⭐🎮
- Build FX-based optimization pass
- Op fusion: linear + activation
- Layout optimization
- Automatic quantization pass
- Benchmark fused vs unfused
- Plug into `torch.compile` backend

---
---

# ☀️ PHASE 8 — RAY — DISTRIBUTED PYTHON + ML (Day 136–150)

---

### 📅 Day 136 — Ray Core 🔥⭐
- Ray architecture — scheduler, object store, GCS
- `@ray.remote` — tasks + actors
- Object refs + futures
- Ray object store — shared memory ⭐
- Ray cluster setup
- Local vs remote Ray

### 📅 Day 137 — Ray Tasks + Actors 🔥
- Stateless tasks — pure functions
- Stateful actors — classes
- Actor pools
- Named actors
- Actor lifecycle
- Error handling + retries

### 📅 Day 138 — Ray Data ⭐🎮
- `ray.data.Dataset` — distributed data
- Reading from S3, GCS, local ⭐🎮
- Transformations — `map`, `filter`, `flat_map`
- Streaming execution model ⭐🎮
- Preprocessing pipeline for ML ⭐🎮
- Ray Data + PyTorch DataLoader ⭐🎮

### 📅 Day 139 — Ray Train ⭐🎮
- `ray.train` — distributed training ⭐🎮
- `TorchTrainer`
- Scaling config (num workers, GPU per worker)
- Fault tolerance + elastic training ⭐🎮
- Checkpointing with Ray Train
- Ray Train + DeepSpeed ⭐🎮

### 📅 Day 140 — Ray Tune 🔥⭐
- `ray.tune` — hyperparameter optimization ⭐
- Search algorithms (Optuna, HyperOpt, Bayesian)
- Schedulers (ASHA, PBT) 🔥
- Population Based Training 🔥
- Resource-aware scheduling
- Integrating with PyTorch training loops ⭐

### 📅 Day 141 — Ray Serve ⭐🎮
- `ray.serve` — scalable model serving ⭐🎮
- Deployments + replicas
- Request batching ⭐🎮
- Pipeline deployments (preprocessing → model → postprocessing)
- HTTP + gRPC endpoints
- A/B testing deployments ⭐

### 📅 Day 142 — Ray RLlib 🔥🤖
- `rllib` — distributed RL ⭐🤖
- Environment wrappers
- Algorithm API (PPO, SAC, TD3) 🔥🤖
- Multi-agent RL 🔥🤖
- Custom environments
- Why RLlib matters for robotics ⭐🤖

### 📅 Day 143 — Ray Advanced 🔥
- Placement groups — resource affinity
- Custom schedulers
- Ray workflows — DAG of tasks
- Ray compiled graphs ⭐🎮
- Ray + Kubernetes ⭐🎮
- Ray observability (dashboard, metrics)

### 📅 Day 144–148 — Ray Practice
- Distributed hyperparameter search with Ray Tune
- Distributed data preprocessing pipeline
- Multi-GPU training with Ray Train
- Model serving pipeline with Ray Serve
- RL training with RLlib

### 📅 Day 149–150 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 8: Distributed ML Platform ⭐🎮
- Ray Data pipeline (dataset → preprocess → cache)
- Ray Train (distributed PyTorch training)
- Ray Tune (hyperparameter search)
- Ray Serve (model deployment)
- End-to-end: data → train → tune → serve

---
---

# 🏭 PHASE 9 — MLOPS + PRODUCTION ML (Day 151–170)

---

### 📅 Day 151 — MLOps Overview 🔥⭐
- MLOps lifecycle
- CI/CD for ML 🔥
- Experiment tracking ⭐
- Model registry ⭐
- Feature stores
- Data versioning ⭐
- Model monitoring ⭐

### 📅 Day 152 — Airflow for ML 🔥
- Airflow DAGs
- Operators (Python, Bash, sensor)
- XCom — task communication
- Scheduling + backfill
- ML pipeline as DAG
- Airflow vs Prefect vs Dagster

### 📅 Day 153 — Prefect / Dagster ⭐
- Prefect flows + tasks
- Retries, caching, scheduling
- Prefect deployments
- Dagster assets concept ⭐
- Software-defined assets for ML
- Data lineage

### 📅 Day 154 — Feature Stores 🔥⭐
- Feast — open source feature store ⭐
- Feature definitions
- Online vs offline stores
- Point-in-time correctness 🔥
- Feature serving for inference
- Tecton concept ⭐

### 📅 Day 155 — Data Version Control 🔥⭐
- DVC deep ⭐
- Data pipeline as code
- Experiment versioning
- DVC + Git workflow
- Remote storage (S3, GCS)
- `dvc repro` — reproducibility

### 📅 Day 156 — Model Monitoring 🔥⭐
- Data drift detection ⭐
- Concept drift vs data drift
- Evidently — open source monitoring ⭐
- Model performance monitoring
- Statistical tests for drift
- Alerting strategies

### 📅 Day 157 — MLflow Deep ⭐🔥
- MLflow tracking ⭐
- MLflow projects
- MLflow models — packaging
- MLflow registry — lifecycle
- MLflow deployments
- Custom MLflow plugins

### 📅 Day 158 — Kubernetes for ML 🔥⭐🎮
- Kubernetes concepts (pods, deployments, services) ⭐🎮
- `kubectl` basics
- GPU scheduling in Kubernetes ⭐🎮
- NVIDIA device plugin ⭐🎮
- Kubeflow — ML on Kubernetes ⭐🎮
- Argo Workflows for ML

### 📅 Day 159 — Kubeflow 🔥🎮
- Kubeflow Pipelines ⭐🎮
- Training operators (PyTorchJob) ⭐🎮
- Katib — hyperparameter tuning ⭐
- KServe — model serving ⭐🎮
- Multi-GPU jobs in Kubernetes ⭐🎮

### 📅 Day 160 — Infrastructure as Code ⭐
- Terraform basics ⭐
- Provisioning GPU VMs
- Ansible for server config
- Docker Compose for local ML stack
- Automating ML infrastructure

### 📅 Day 161 — Observability for ML 🔥⭐🎮
- Prometheus + Grafana for ML ⭐🎮
- GPU metrics (DCGM exporter) ⭐🎮
- Training metrics dashboards
- Alerting on OOM, NaN loss, slow throughput
- OpenTelemetry for ML services

### 📅 Day 162 — Streaming ML ⭐
- Kafka basics ⭐
- Real-time feature engineering
- Online learning concept
- Streaming inference
- Flink concept

### 📅 Day 163–167 — MLOps Practice
- Build full ML pipeline: data → train → monitor → serve
- Kubernetes deployment with GPU
- Drift detection on production model
- CI/CD with GitHub Actions

### 📅 Day 168–170 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 9: Full MLOps Platform ⭐🎮
- Airflow pipeline: data → preprocess → train → evaluate
- MLflow experiment tracking + registry
- Kubernetes deployment (GPU)
- Prometheus + Grafana monitoring
- Evidently drift detection
- GitHub Actions CI/CD

---
---

# 🤖 PHASE 10 — ROBOTICS MATH + THEORY (Day 171–195)
### 🎯 Goal: Build the mathematical foundation for robotics

---

### 📅 Day 171 — Robotics Overview 🤖
- Types of robots (manipulators, mobile, humanoid, aerial)
- Robotics software stack
- Sense → Plan → Act loop 🔥🤖
- ROS2 overview (preview)
- Robotics math prerequisites
- Key robotics problems

### 📅 Day 172 — Linear Algebra for Robotics 🔥🤖
- Review: vectors, matrices, transforms ⭐
- Dot product → projection
- Cross product → rotation axis
- Homogeneous coordinates 🔥🤖
- Transformation matrices (4×4) 🔥🤖
- Why homogeneous coords simplify robotics math

### 📅 Day 173 — Rotation Representations 🔥🤖
- Rotation matrices (SO(3)) 🔥🤖
- Euler angles (roll, pitch, yaw) 🔥🤖
- Gimbal lock — why it's a problem 🔥🤖
- Axis-angle representation
- Quaternions 🔥🔥🤖
- Quaternion math: multiplication, conjugate, inverse
- Converting between representations 🔥🤖

### 📅 Day 174 — Quaternions Deep 🔥🤖
- Unit quaternions as rotations 🔥🤖
- SLERP — spherical linear interpolation 🔥🤖
- Quaternion → rotation matrix
- Rotation matrix → quaternion
- Quaternion derivative → angular velocity
- Why robots use quaternions ⭐🤖

### 📅 Day 175 — Rigid Body Transforms 🔥🤖
- SE(3) — special Euclidean group 🔥🤖
- Transformation matrix composition
- Inverse transformation
- Transform chains 🔥🤖
- Adjoint representation
- Screw theory basics

### 📅 Day 176 — Forward Kinematics 🔥🤖
- Kinematic chains 🔥🤖
- Denavit-Hartenberg (DH) parameters 🔥🤖
- DH convention (standard + modified)
- FK for serial manipulator
- Implementing FK for 6-DOF arm
- Workspace analysis

### 📅 Day 177 — Inverse Kinematics 🔥🤖
- IK problem formulation 🔥🤖
- Analytical IK — closed-form solutions
- Numerical IK — iterative methods 🔥🤖
- Jacobian matrix 🔥🤖
- Jacobian pseudoinverse
- Singularities — what they are + avoiding them 🔥🤖
- Damped least squares IK

### 📅 Day 178 — Jacobians Deep 🔥🤖
- Geometric Jacobian 🔥🤖
- Analytical Jacobian
- Velocity kinematics: ẋ = J(q)q̇ 🔥🤖
- Force-torque relationship: τ = Jᵀ F 🔥🤖
- Manipulability measure
- Jacobian in nullspace control

### 📅 Day 179 — Robot Dynamics (Part 1) 🔥🤖
- Newton-Euler method 🔥🤖
- Inertia tensor
- Forward dynamics
- Inverse dynamics 🔥🤖
- Lagrangian mechanics (intro)
- Mass matrix, Coriolis matrix, gravity vector

### 📅 Day 180 — Robot Dynamics (Part 2) 🔥🤖
- Recursive Newton-Euler algorithm 🔥🤖
- Implementing RNE from scratch
- Dynamic simulation
- Friction models
- Joint space vs task space dynamics
- Why dynamics matter for control + learning 🤖

### 📅 Day 181 — Control Theory (Part 1) 🔥🤖
- Control systems overview
- Open loop vs closed loop 🔥🤖
- PID controller 🔥🤖
  - Proportional, Integral, Derivative
  - Tuning methods (Ziegler-Nichols)
- Step response analysis
- Stability (BIBO, Lyapunov concept)

### 📅 Day 182 — Control Theory (Part 2) 🔥🤖
- State space representation 🔥🤖
- Controllability + observability
- State feedback control (pole placement)
- LQR (Linear Quadratic Regulator) 🔥🤖
- Kalman filter (intro) 🔥🤖
- Why LQR is used in robotics

### 📅 Day 183 — Robot Control Architectures 🔥🤖
- Joint space control 🔥🤖
- Task space control
- Computed torque control (feedforward + feedback)
- Impedance control 🔥🤖
- Admittance control
- Hybrid force/position control

### 📅 Day 184 — Motion Planning (Part 1) 🔥🤖
- Configuration space (C-space) 🔥🤖
- Obstacle representation in C-space
- Sampling-based planners 🔥🤖
  - RRT (Rapidly-exploring Random Tree) 🔥🤖
  - RRT* — optimal version 🔥🤖
  - PRM (Probabilistic Roadmap)
- Completeness + optimality

### 📅 Day 185 — Motion Planning (Part 2) 🔥🤖
- Search-based planners
  - A* on grids 🔥🤖
  - D* Lite — dynamic replanning
- Trajectory optimization 🔥🤖
  - CHOMP
  - TrajOpt
- Potential fields method
- MoveIt! connection (preview) ⭐🤖

### 📅 Day 186 — Probability + Estimation for Robotics 🔥🤖
- State estimation problem 🔥🤖
- Bayes filter 🔥🤖 ⭐
- Kalman Filter deep 🔥🤖
  - Prediction + update steps
  - Noise models
- Extended Kalman Filter (EKF) 🔥🤖
- Unscented Kalman Filter (UKF)

### 📅 Day 187 — SLAM Foundations 🔥🤖
- SLAM problem (Simultaneous Localization and Mapping) 🔥🤖
- Feature-based SLAM
- Occupancy grid mapping 🔥🤖
- Graph SLAM
- Factor graphs 🔥🤖
- GTSAM / g2o concept

### 📅 Day 188 — Sensor Models 🔥🤖
- Camera models 🔥🤖
  - Pinhole camera model
  - Distortion models
  - Camera calibration (OpenCV) ⭐
- LiDAR sensor model 🔥🤖
- IMU model + noise 🔥🤖
- Sensor fusion fundamentals 🔥🤖

### 📅 Day 189 — Computer Vision for Robotics 🔥🤖
- Stereo vision + depth 🔥🤖
- Visual odometry (VO) 🔥🤖
- Feature tracking (KLT) 🔥🤖
- Optical flow 🔥🤖
- 3D point clouds from RGB-D ⭐🤖
- Plane detection + fitting

### 📅 Day 190 — Path + Trajectory Planning 🔥🤖
- Difference: path vs trajectory 🔥🤖
- Trajectory parametrization
- Quintic polynomial trajectories 🔥🤖
- B-spline trajectories
- Time-optimal trajectory planning
- Trapezoidal velocity profile 🔥🤖

### 📅 Day 191 — Implementing Robotics Algorithms in Python 🤖
- Implementing FK/IK from scratch
- Implementing A* + RRT
- Implementing EKF
- Implementing PID controller
- `numpy` + `scipy` for robotics ⭐
- Visualization with matplotlib ⭐

### 📅 Day 192 — PyBullet / MuJoCo Intro 🔥🤖
- Physics simulation for robotics 🔥🤖
- PyBullet — loading URDF, stepping simulation
- MuJoCo — faster, more accurate ⭐🤖
- URDF + MJCF robot description formats 🔥🤖
- Simulating a robot arm
- Simulating mobile robot

### 📅 Day 193 — Simulation Environments 🔥🤖
- Gymnasium (OpenAI Gym) ⭐🤖
- Creating custom gym environments 🔥🤖
- Robotics gym environments (FetchReach, etc.)
- Isaac Gym / Isaac Lab ⭐🎮🤖
- Genesis physics simulator ⭐🤖

### 📅 Day 194 — Robotics Math Practice 🤖
- Implement full FK/IK for 6-DOF arm
- Implement RRT path planner
- Implement EKF for robot localization
- Simulate in PyBullet

### 📅 Day 195 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 10: Robot Arm Simulator 🤖
- 6-DOF robot arm in PyBullet/MuJoCo
- FK + IK implementation
- PID joint control
- RRT motion planner
- Pick and place task
- Visualization in real-time

---
---

# 🤖 PHASE 11 — ROS2 DEEP (Day 196–225)
### 🎯 Goal: Master the industry-standard robot OS

---

### 📅 Day 196 — ROS2 Architecture 🔥🤖
- ROS2 vs ROS1 differences 🔥🤖
- DDS (Data Distribution Service) 🔥🤖
- Nodes, topics, services, actions, parameters
- ROS2 middleware (rmw) layer
- `colcon` build system
- Workspace setup (`ros2_ws`)

### 📅 Day 197 — ROS2 Nodes + Topics 🔥🤖
- Node lifecycle
- `rclpy` — Python ROS2 client
- Publisher + subscriber pattern
- QoS profiles 🔥🤖
- `ros2 topic` CLI
- Custom message types
- Latency + bandwidth considerations

### 📅 Day 198 — ROS2 Services + Actions 🔥🤖
- Service server + client (request/response)
- When services vs topics
- Action server + client (long-running tasks) 🔥🤖
- Action goals, feedback, results
- `ros2 service`, `ros2 action` CLI
- Custom service + action types

### 📅 Day 199 — ROS2 Parameters + Launch 🔥🤖
- Parameter server
- `rclpy` parameter API
- YAML parameter files
- Launch files (Python-based) 🔥🤖
- Launch substitutions + conditions
- Multi-node launch

### 📅 Day 200 — ROS2 TF2 (Transform System) 🔥🤖
- TF2 — transform library 🔥🤖
- Broadcasting transforms
- Listening for transforms
- Transform tree
- `robot_state_publisher`
- Static vs dynamic transforms
- TF2 + robot URDF

### 📅 Day 201 — URDF + Robot Description 🔥🤖
- URDF syntax (links, joints) 🔥🤖
- Joint types (revolute, prismatic, fixed)
- Inertial + collision + visual tags
- Xacro macros 🔥🤖
- Visualizing in RViz2
- Loading robot into simulation

### 📅 Day 202 — RViz2 + Visualization 🔥🤖
- RViz2 panels + displays
- Visualizing: robot model, TF, point clouds, images, markers
- Custom RViz2 markers
- RViz2 for debugging robot state
- Recording + replaying with rosbag2 🔥🤖

### 📅 Day 203 — rosbag2 + Introspection 🔥🤖
- `rosbag2` — recording + playback
- Recording specific topics
- Playback rate control
- Converting bag to other formats
- `ros2 bag` CLI
- Offline analysis of robot data
- Bag files for ML dataset creation ⭐🤖

### 📅 Day 204 — ROS2 Navigation (Nav2) 🔥🤖
- Nav2 stack overview 🔥🤖
- Costmaps (global, local) 🔥🤖
- Global planner (NavFn, Smac) 🔥🤖
- Local planner (DWB, MPPI) 🔥🤖
- Recovery behaviors
- Behavior trees (BT) in Nav2 🔥🤖

### 📅 Day 205 — Nav2 Configuration 🔥🤖
- YAML configuration deep
- Tuning Nav2 parameters
- Lifecycle management
- Custom plugins (planner, controller, recovery)
- Nav2 with real robot

### 📅 Day 206 — MoveIt2 (Motion Planning) 🔥🤖
- MoveIt2 architecture 🔥🤖
- Planning scene
- MoveIt2 Python API (`moveit_py`)
- Planning + execution
- Collision objects
- Grasp planning

### 📅 Day 207 — MoveIt2 Advanced 🔥🤖
- OMPL planners in MoveIt2
- Task constructor (MTC) 🔥🤖
- Servo — real-time Cartesian control
- MoveIt2 + custom IK plugins
- Simulation → real transfer

### 📅 Day 208 — ROS2 Control 🔥🤖
- `ros2_control` framework 🔥🤖
- Hardware interface 🔥🤖
- Controllers (joint trajectory, diff drive, etc.)
- Controller manager
- Real hardware integration
- Gazebo + ros2_control

### 📅 Day 209 — Gazebo (Ignition / Modern Gazebo) 🔥🤖
- Modern Gazebo (Ignition) 🔥🤖
- ROS2 + Gazebo bridge
- Simulating sensors (camera, LiDAR, IMU, depth)
- Spawning + controlling robots
- World SDF files
- Headless simulation for RL ⭐🤖

### 📅 Day 210 — Perception Pipeline in ROS2 🔥🤖
- Camera → ROS2 image topics
- `image_transport`
- `cv_bridge` — OpenCV ↔ ROS2 🔥🤖⭐
- Depth image → point cloud
- `pcl_ros` — point cloud processing
- Object detection node in ROS2 ⭐🤖

### 📅 Day 211 — SLAM in ROS2 🔥🤖
- SLAM Toolbox — 2D SLAM 🔥🤖
- Cartographer — 2D/3D SLAM ⭐🤖
- RTAB-Map — visual SLAM ⭐🤖
- LiDAR SLAM setup
- Visual SLAM setup
- Map saving + loading

### 📅 Day 212 — ROS2 with Real Hardware 🔥🤖
- Real sensor integration (camera, LiDAR, IMU)
- Motor driver interfaces
- CAN bus for robot joints
- Serial communication (`pyserial`)
- Safety systems
- Emergency stop handling

### 📅 Day 213 — Behavior Trees in ROS2 🔥🤖
- BehaviorTree.CPP library 🔥🤖
- Behavior tree concepts (sequence, fallback, decorator)
- BT in Nav2 ⭐🤖
- Writing custom BT nodes
- BT + ROS2 actions
- Complex robot behaviors as BTs

### 📅 Day 214 — ROS2 Security + Quality 🤖
- ROS2 security (SROS2)
- QoS reliability + durability
- Lifecycle nodes for safe startup
- Component containers (intra-process)
- Real-time ROS2 (`rclcpp` real-time patterns)

### 📅 Day 215 — Isaac ROS ⭐🎮🤖
- NVIDIA Isaac ROS ⭐🎮🤖
- GPU-accelerated ROS2 packages ⭐🎮🤖
- Isaac ROS Visual SLAM ⭐🤖
- Isaac ROS Object Detection ⭐🤖
- Isaac ROS Nitros (zero-copy GPU transport) ⭐🎮🤖
- Running on Jetson ⭐🎮🤖

### 📅 Day 216 — ROS2 Real-Time Programming 🔥🤖
- Real-time Linux (PREEMPT_RT)
- Lock-free programming in ROS2
- Memory allocation strategies
- CPU isolation
- Real-time executors
- Measuring latency

### 📅 Day 217–222 — ROS2 Practice Projects 🤖
- Full mobile robot navigation stack
- Robot arm pick and place in Gazebo
- SLAM + navigation integration
- Full perception pipeline (detect → locate → grasp)

### 📅 Day 223–224 — ROS2 Advanced Topics 🤖
- Multi-robot systems
- ROS2 on embedded (micro-ROS)
- ROS2 + cloud integration
- ROS2 testing (ros2cli, launch_testing)

### 📅 Day 225 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 11: Full Robot Stack in ROS2 🤖
- Mobile robot in Gazebo
- SLAM (SLAM Toolbox)
- Navigation (Nav2)
- Perception (object detection from your ML roadmap) ⭐🤖
- Manipulation (MoveIt2)
- BT mission execution
- rosbag2 recording

---
---

# 👁️ PHASE 12 — ROBOT PERCEPTION (Day 226–250)

---

### 📅 Day 226 — Point Cloud Processing 🔥🤖
- Point cloud data structures
- Open3D library 🔥🤖
- PCL (Point Cloud Library)
- Filtering (voxel, passthrough, statistical)
- Normal estimation
- ICP (Iterative Closest Point) 🔥🤖

### 📅 Day 227 — 3D Object Detection 🔥🤖⭐
- LiDAR-based 3D detection 🔥🤖
- PointPillars architecture 🔥🤖
- VoxelNet concept
- CenterPoint ⭐🤖
- Camera + LiDAR fusion 🔥🤖
- nuScenes dataset

### 📅 Day 228 — Depth Perception 🔥🤖
- Stereo matching algorithms
- Stereo SGBM
- Learned stereo (RAFT-Stereo) ⭐🤖
- RGB-D cameras (RealSense, ZED)
- Structured light vs ToF
- Depth completion 🔥🤖

### 📅 Day 229 — Visual Odometry + VIO 🔥🤖
- Monocular VO pipeline
- Stereo VO
- Feature-based VO (ORB-SLAM) 🔥🤖
- Direct methods (LSD-SLAM)
- Visual-Inertial Odometry (VIO) 🔥🤖
- VINS-Mono / VINS-Fusion

### 📅 Day 230 — Object Pose Estimation 🔥🤖
- 6-DOF pose estimation 🔥🤖
- Keypoint-based methods
- FoundPose / FoundationPose ⭐🤖
- PVNet, PoseCNN
- RGB-D pose estimation
- Why pose estimation matters for grasping 🔥🤖

### 📅 Day 231 — Grasp Detection 🔥🤖
- Grasp quality metrics 🔥🤖
- GraspNet-1Billion ⭐🤖
- Grasp synthesis in 3D
- Dexterous grasping concepts
- Grasp planning pipeline

### 📅 Day 232 — Semantic Segmentation for Robots 🔥🤖
- 3D semantic segmentation ⭐🤖
- Semantic SLAM
- Panoptic segmentation in robotics ⭐🤖
- Open-vocabulary segmentation ⭐🤖
- SAM (Segment Anything) for robotics ⭐🤖

### 📅 Day 233 — Foundation Models for Robotics ⭐🔥🤖
- Vision-Language-Action (VLA) models ⭐🔥🤖
- RT-1, RT-2 ⭐🤖
- Octo ⭐🤖
- OpenVLA ⭐🤖
- Using pretrained vision models ⭐🤖
- Language-guided manipulation ⭐🤖

### 📅 Day 234 — Sensor Fusion 🔥🤖
- Camera + LiDAR fusion 🔥🤖
- Camera + IMU fusion (VIO) 🔥🤖
- Multi-camera systems
- Time synchronization 🔥🤖
- Calibration (camera-LiDAR, camera-IMU) 🔥🤖
- `Kalibr` calibration tool

### 📅 Day 235 — Map Representations 🔥🤖
- Occupancy grids 🔥🤖
- OctoMap — 3D occupancy ⭐🤖
- Signed Distance Fields (SDF) 🔥🤖
- Neural Radiance Fields (NeRF) for robots ⭐🤖
- 3D Gaussian Splatting ⭐🤖
- Semantic maps

### 📅 Day 236 — Tracking + Multi-Object Tracking 🔥🤖
- Object tracking (DeepSORT) ⭐🤖
- Multi-object tracking (MOT)
- SORT algorithm 🔥🤖
- ByteTrack ⭐🤖
- Tracking in robotics context

### 📅 Day 237 — Human Detection + Pose Estimation 🔥🤖
- Human skeleton detection
- MediaPipe ⭐🤖
- OpenPose
- ViTPose ⭐🤖
- Human pose for HRI (Human-Robot Interaction)
- Gesture recognition

### 📅 Day 238 — Scene Understanding 🔥🤖
- Scene graph generation
- Spatial relationship understanding
- Open-vocabulary detection (DINO, GLIP) ⭐🤖
- Grounded-SAM ⭐🤖
- Affordance learning ⭐🤖

### 📅 Day 239 — Neural Scene Representations ⭐🤖
- NeRF for robot navigation ⭐🤖
- 3D Gaussian Splatting ⭐🤖
- Neural implicit surfaces
- Building maps with NeRF
- Real-time NeRF (Instant NGP)

### 📅 Day 240–244 — Perception Projects 🤖

### 🛠️ PROJECT 12: Full Perception Stack 🤖
- RGB-D → Point cloud
- 6-DOF object pose estimation
- 3D scene segmentation
- Grasp pose detection
- Language-guided object selection ⭐🤖
- Full ROS2 integration

### 📅 Day 245–249 — Perception Deep Practice 🤖
- Implement VO pipeline
- Train custom 3D detector
- Build semantic map

### 📅 Day 250 🔁 — REVISION

---
---

# 🧠 PHASE 13 — ROBOT LEARNING + RL DEEP (Day 251–280)

---

### 📅 Day 251 — RL Review for Robotics 🔥🤖⭐
- MDP formulation for robotics ⭐
- State/action/reward design 🔥🤖
- Policy gradient theorem
- Value functions
- Model-free vs model-based RL 🔥🤖

### 📅 Day 252 — PPO for Robotics 🔥🤖⭐
- PPO algorithm deep ⭐🤖
- Reward shaping 🔥🤖
- Observation design
- Action space design (joint vs Cartesian)
- PPO hyperparameters for robotics
- Training a robot arm with PPO

### 📅 Day 253 — SAC (Soft Actor-Critic) 🔥🤖
- SAC algorithm 🔥🤖
- Maximum entropy RL 🔥🤖
- Continuous action spaces
- Automatic entropy tuning
- SAC for manipulation
- SAC vs PPO for robotics

### 📅 Day 254 — TD3 + Model-Free Methods 🔥🤖
- TD3 algorithm
- DDPG → TD3 improvements
- Hindsight Experience Replay (HER) 🔥🤖
- Goal-conditioned RL 🔥🤖
- Sparse rewards + HER
- Multi-goal robotics

### 📅 Day 255 — Model-Based RL 🔥🤖
- World models 🔥🤖
- Dyna-style algorithms
- MBPO (Model-Based Policy Optimization) 🔥🤖
- PETS — probabilistic ensembles
- Dreamer / DreamerV3 ⭐🤖
- Why model-based is sample efficient

### 📅 Day 256 — Imitation Learning 🔥🤖
- Behavioral cloning (BC) 🔥🤖
- Distribution shift problem 🔥🤖
- DAgger — dataset aggregation 🔥🤖
- GAIL (Generative Adversarial IL)
- IRL (Inverse Reinforcement Learning)
- Learning from human demonstrations ⭐🤖

### 📅 Day 257 — Offline RL 🔥🤖
- Offline RL problem 🔥🤖
- Conservative Q-Learning (CQL) 🔥🤖
- IQL (Implicit Q-Learning) ⭐🤖
- TD3+BC ⭐🤖
- D4RL benchmark datasets
- Offline RL for robot learning ⭐🤖

### 📅 Day 258 — Transformers for Decision Making 🔥🤖⭐
- Decision Transformer 🔥🤖⭐
- Trajectory Transformer
- GATO — generalist agent ⭐🤖
- Sequence modeling for RL 🔥🤖
- Offline → online adaptation

### 📅 Day 259 — Diffusion for Robotics ⭐🔥🤖
- Diffusion Policy 🔥🤖⭐
- Action chunking 🔥🤖
- Multi-modal action distributions
- Diffusion vs Gaussian policy
- Why diffusion works for manipulation ⭐🤖

### 📅 Day 260 — Learning from Play 🔥🤖
- Play data collection
- Learning from play (LfP)
- Latent plans
- Relay Policy Learning
- Data collection strategies for robot learning

### 📅 Day 261 — Multi-Task Robot Learning 🔥🤖
- Multi-task RL 🔥🤖
- Task embeddings
- Meta-RL 🔥🤖
- MAML for robotics
- Few-shot adaptation
- Why multi-task is needed for generalization 🤖

### 📅 Day 262 — Isaac Lab + GPU RL 🔥🎮🤖
- Isaac Lab architecture ⭐🎮🤖
- Massively parallel RL on GPU 🔥🎮🤖
- `IsaacEnv` base class
- Custom Isaac Lab environment
- GPU vectorized environments 🔥🎮🤖
- Training 4096 robots in parallel ⭐🎮🤖

### 📅 Day 263 — Isaac Lab Deep 🔥🎮🤖
- Locomotion environments (AnyMAL, Unitree) ⭐🤖
- Manipulation environments ⭐🤖
- Terrain generation 🤖
- Domain randomization in Isaac Lab 🔥🤖
- Curriculum learning ⭐🤖
- RSL-RL, rl_games trainers ⭐🤖

### 📅 Day 264 — Reward Design 🔥🤖
- Reward engineering 🔥🤖
- Dense vs sparse rewards
- Potential-based reward shaping
- LLM-guided reward design ⭐🤖
- Reward from human feedback (RLHF) ⭐🤖
- Automatic reward design ⭐🤖

### 📅 Day 265 — Curriculum Learning 🔥🤖
- Manual curriculum design
- Automatic curriculum (ALP-GMM)
- Self-paced learning
- Procedural terrain generation
- Task difficulty adaptation
- PAIRED — adversarial environment generation

### 📅 Day 266 — Safety + Constrained RL 🔥🤖
- Constrained MDP (CMDP) 🔥🤖
- CPO — constrained policy optimization 🔥🤖
- Safe exploration 🔥🤖
- Safety layers ⭐🤖
- Control barrier functions (CBF) 🔥🤖
- Why safety is critical for real robots 🤖

### 📅 Day 267 — Contact-Rich Manipulation 🔥🤖
- Contact mechanics basics
- Compliant control 🔥🤖
- Tactile sensing ⭐🤖
- In-hand manipulation
- Dexterous manipulation
- RL for contact-rich tasks

### 📅 Day 268 — Large-Scale Robot Learning ⭐🔥🤖
- RT-1 — Robotics Transformer 🔥🤖⭐
- RT-2 — VLA model ⭐🤖
- ALOHA + ACT ⭐🤖
- Open X-Embodiment dataset ⭐🤖
- RoboAgent ⭐🤖
- Scaling laws for robot learning ⭐🤖

### 📅 Day 269 — Foundation Model Policies ⭐🔥🤖
- VLA (Vision-Language-Action) deep ⭐🔥🤖
- π0 (pi-zero) ⭐🤖
- OpenVLA ⭐🤖
- Fine-tuning VLAs for specific tasks ⭐🤖
- Flow matching for robot policies ⭐🤖
- Physical Intelligence (pi.ai) research ⭐🤖

### 📅 Day 270 — Locomotion Learning 🔥🤖
- Quadruped locomotion (ANYmal, Unitree) ⭐🤖
- Legged gym environments ⭐🤖
- Teacher-student distillation 🔥🤖
- Asymmetric actor-critic 🔥🤖
- Locomotion in rough terrain ⭐🤖
- ETH Zurich approach (Hwangbo et al.) ⭐🤖

### 📅 Day 271 — Whole-Body Control 🔥🤖
- Whole-body control (WBC) 🔥🤖
- Hierarchical control
- Loco-manipulation
- Humanoid control ⭐🤖
- Unitree H1 / Boston Dynamics research
- RL for humanoids ⭐🤖

### 📅 Day 272–275 — RL Robotics Practice 🤖

### 🛠️ PROJECT 13: Learning Robot Controller 🤖🎮
- Isaac Lab environment (custom)
- PPO + SAC comparison
- Curriculum learning
- Domain randomization
- Sim-to-real gap analysis
- Visualize training curves + behaviors

### 📅 Day 276–279 — Deep Practice 🤖
- Train locomotion policy
- Train manipulation policy with diffusion
- Implement offline RL pipeline

### 📅 Day 280 🔁 — REVISION

---
---

# 🌉 PHASE 14 — SIM-TO-REAL + ADVANCED ROBOTICS (Day 281–310)

---

### 📅 Day 281 — Sim-to-Real Gap 🔥🤖
- Sources of sim-to-real gap 🔥🤖
- Dynamics mismatch
- Visual mismatch
- Actuation mismatch
- Measurement: real vs sim performance

### 📅 Day 282 — Domain Randomization 🔥🤖
- Uniform domain randomization (UDR) 🔥🤖
- Adaptive domain randomization (ADR) 🔥🤖
- Visual DR — textures, lighting, distractors
- Physical DR — mass, friction, damping
- OpenAI Dactyl approach

### 📅 Day 283 — System Identification 🔥🤖
- Parameter estimation for robot dynamics
- Least squares sysid
- Online sysid
- Bayesian sysid
- Neural network sysid 🔥🤖
- Using real data to improve sim ⭐🤖

### 📅 Day 284 — Sim-to-Real Transfer Techniques 🔥🤖
- Privileged learning + distillation 🔥🤖
- Asymmetric actor-critic ⭐🤖
- RMA (Rapid Motor Adaptation) 🔥🤖
- Adaptation module design
- Online adaptation at deployment

### 📅 Day 285 — Real Robot Integration 🔥🤖
- Deploying trained policies to real hardware 🔥🤖
- Latency handling (observation delay, action delay) 🔥🤖
- Safety wrappers
- Emergency stop integration
- Logging + debugging on real robot
- Policy deployment pipeline ⭐🤖

### 📅 Day 286 — Robot Calibration + Maintenance 🔥🤖
- Joint calibration
- Camera-robot calibration (eye-in-hand, eye-to-hand) 🔥🤖
- Force-torque sensor calibration
- IMU calibration
- Routine calibration procedures

### 📅 Day 287 — Dexterous Manipulation Advanced 🔥🤖
- Multi-fingered hands
- Tactile sensing networks ⭐🤖
- In-hand object reorientation
- Learning dexterous skills
- OpenAI Dactyl analysis

### 📅 Day 288 — Mobile Manipulation 🔥🤖
- Mobile manipulator platforms (Hello Robot, TidyBot)
- Navigation + manipulation integration 🔥🤖
- Semantic navigation 🔥🤖
- Task and motion planning (TAMP) 🔥🤖
- LLM-guided TAMP ⭐🤖

### 📅 Day 289 — Task + Motion Planning (TAMP) 🔥🤖
- PDDL task planning
- PDDLStream
- Integrating learning + planning 🔥🤖
- LLM for task planning ⭐🤖
- SayCan — LLM + affordances ⭐🤖
- Code-as-policies ⭐🤖

### 📅 Day 290 — Human-Robot Interaction (HRI) 🔥🤖
- Safety standards (ISO 10218)
- Collaborative robots (cobots)
- Force-limited operation
- Human intent prediction
- Language-guided robots ⭐🤖
- Social navigation

### 📅 Day 291 — Aerial Robots (Drones) 🤖
- Quadrotor dynamics 🔥🤖
- PID attitude control
- Position control
- Trajectory following
- PX4 / ArduPilot
- ROS2 + drone

### 📅 Day 292 — Autonomous Vehicles (AV) Overview 🤖
- AV stack overview
- Sensor suite (LiDAR, cameras, radar)
- HD maps
- Prediction + planning in AV
- Apollo / Autoware ⭐🤖
- nuScenes dataset ⭐🤖

### 📅 Day 293 — Edge Computing for Robots 🔥🎮🤖
- NVIDIA Jetson platform ⭐🎮🤖
- TensorRT on Jetson ⭐🎮🤖
- Isaac ROS on Jetson ⭐🎮🤖
- Power budget optimization
- Real-time inference at the edge
- Deploying trained models to Jetson ⭐🎮🤖

### 📅 Day 294 — Robot Operating System Internals 🔥🤖
- DDS deep (eProsima Fast-DDS)
- QoS profiles for real-time
- Intra-process communication
- Executor design patterns
- Custom memory allocators for ROS2

### 📅 Day 295 — Cloud Robotics 🤖
- Robot ↔ cloud communication
- Offloading computation to cloud
- AWS RoboMaker concept
- 5G for robotics
- Edge-cloud hybrid inference ⭐🎮🤖

### 📅 Day 296 — Continual + Lifelong Learning 🔥🤖
- Catastrophic forgetting 🔥🤖
- Continual learning methods (EWC, PackNet)
- Online adaptation
- Memory replay
- Lifelong robot learning ⭐🤖

### 📅 Day 297 — Multi-Robot Systems 🔥🤖
- Multi-robot coordination
- Distributed SLAM
- Swarm robotics
- Multi-agent RL for robots 🔥🤖
- Communication-limited coordination

### 📅 Day 298 — Reading Robotics Papers 🔥🤖
- How to read robotics papers ⭐
- Key conferences: ICRA, IROS, CoRL, RSS
- Implementing a recent robotics paper
- Following latest research (arXiv cs.RO)

### 📅 Day 299–305 — Advanced Practice 🤖
- Deploy manipulation policy to real/sim robot
- Full mobile manipulation task
- TAMP with LLM planner

### 📅 Day 306–309 — Integrating Everything 🤖🎮⭐
- CUDA-optimized perception pipeline ⭐🎮🤖
- Fast inference for robot policies ⭐🎮🤖
- Real-time ROS2 + GPU ⭐🎮🤖
- End-to-end latency optimization ⭐🎮🤖

### 📅 Day 310 🔁 — REVISION

---
---

# 🏆 PHASE 15 — CAPSTONE PROJECTS (Day 311–320)

---

### 🛠️ PROJECT 14: High-Performance LLM Inference Engine (Day 311–312) 🎮
- Custom attention kernel (Triton + CUDA) ⭐🎮
- Paged KV cache ⭐🎮
- Continuous batching ⭐🎮
- Tensor parallelism ⭐🎮
- FP8 quantization (if H100 available) ⭐🎮
- Benchmark: tokens/sec vs vLLM ⭐🎮
- Full Python API

### 🛠️ PROJECT 15: Distributed Training System (Day 313) 🎮
- Train LLaMA-scale model ⭐🎮
- 3D parallelism (DP + TP + PP) ⭐🎮
- DeepSpeed ZeRO-3 ⭐🎮
- FSDP + mixed precision ⭐🎮
- Scaling report: 1 → 4 → 8 GPUs ⭐🎮
- Published to HuggingFace Hub ⭐

### 🛠️ PROJECT 16: End-to-End Robotics Stack (Day 314–316) 🤖
- MuJoCo/Isaac Lab simulation ⭐🤖🎮
- PPO + Diffusion Policy ⭐🤖
- Sim-to-real transfer ⭐🤖
- Full ROS2 deployment ⭐🤖
- CUDA-optimized perception ⭐🎮🤖
- Language-guided task execution ⭐🤖
- Real-time performance on Jetson ⭐🎮🤖

### 🛠️ PROJECT 17: ML Systems + Robotics Integration (Day 317–318) 🤖🎮
- GPU-accelerated sensor pipeline ⭐🎮🤖
- TensorRT-optimized policy inference ⭐🎮🤖
- Real-time SLAM + navigation ⭐🤖
- Distributed multi-robot learning ⭐🤖🎮
- Full monitoring + observability ⭐
- Production-grade deployment

### 🛠️ PROJECT 18: Portfolio + Open Source (Day 319–320)
- Publish CUDA kernel library to GitHub 🎮
- Publish Triton kernel library 🎮
- Publish ROS2 packages 🤖
- Write technical blog posts for key projects
- Record demos for robotics projects 🤖
- HuggingFace model cards ⭐
- arXiv tech report (optional) ⭐

---
---

# 📚 LEARNING RESOURCES

| Resource | Phase |
|---|---|
| "Programming Massively Parallel Processors" — Kirk & Hwu 🔥 | 1 |
| NVIDIA CUDA Programming Guide 🔥 | 1 |
| Simon Boehm — "How to Optimize CUDA Matmul" 🔥🎮 | 1 |
| Triton documentation + tutorials | 2 |
| Lilian Weng's blog — distributed training 🔥 | 6 |
| "Robotics: Modelling, Planning and Control" — Siciliano 🔥 | 10 |
| "Probabilistic Robotics" — Thrun 🔥 | 10 |
| ROS2 documentation (docs.ros.org) 🔥 | 11 |
| "Modern Robotics" — Lynch + Park (FREE online) 🔥 | 10 |
| Andrej Karpathy — GPU/systems content 🔥🎮 | 1–5 |
| MLIR official tutorials | 7 |
| LLVM tutorial (Kaleidoscope) | 7 |
| CoRL / ICRA / RSS papers ⭐🤖 | 13–14 |
| Legged Robotics — ETH Zurich YouTube ⭐🤖 | 13 |
| Boston Dynamics / OpenAI robotics papers ⭐🤖 | 14 |
| Isaac Lab documentation ⭐🎮🤖 | 13 |

---

# ⭐ THINGS THAT CHANGE FASTEST

1. **Foundation model policies** (RT-2, π0, OpenVLA) — new releases monthly ⭐🤖
2. **Isaac Lab** — rapidly evolving ⭐🎮🤖
3. **TensorRT-LLM** — new versions frequently ⭐🎮
4. **FlashAttention** — v3, v4 coming ⭐🎮
5. **`torch.compile` / Inductor** — improving every release ⭐🎮
6. **vLLM** — weekly improvements ⭐🎮
7. **Diffusion Policy** — new variants constantly ⭐🤖
8. **MLIR dialects** — new dialects added regularly ⭐🎮
9. **ROS2 releases** — annual LTS releases ⭐🤖
10. **3D Gaussian Splatting** — rapidly evolving ⭐🤖

---

# ✅ END GOAL — After 320 Days You Will:

**ML Systems:**
- Write production CUDA + Triton kernels
- Build custom PyTorch operators
- Deploy optimized inference pipelines (TRT, vLLM)
- Train at scale with DDP/FSDP/TP/PP
- Understand `torch.compile` + MLIR deeply

**Robotics:**
- Build complete robot stacks in ROS2
- Train robot policies with RL + IL + Diffusion
- Deploy sim-to-real with domain randomization
- Use foundation models for robot control
- Work with real hardware

**Combined:**
- GPU-accelerated robot perception
- Real-time policy inference on edge (Jetson)
- Distributed robot learning at scale
- One of the rarest engineering profiles in the world
