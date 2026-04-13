# 💻⚙️ Hardware + OS Mastery Roadmap
### Goal: Understand computers deeply — Hardware + OS + Systems + GPU/ML connections
### Study After: 360-Day ML Roadmap
### Depth: Practical — enough to be dangerous

> 🔥 = Critical concept — must master deeply
> ⭐ = Connects to your ML roadmap
> 🛠️ = Project / hands-on exercise
> 🔁 = Revision day
> 🖥️ = Low-level implementation
> 🎮 = GPU / ML hardware connection

---

## 📌 OVERVIEW

| Phase | Topic | Days |
|---|---|---|
| 1 | Digital Logic + How Computers Think | 1–15 |
| 2 | Computer Architecture Deep | 16–35 |
| 3 | Memory — The Full Picture | 36–50 |
| 4 | Storage + I/O Systems | 51–60 |
| 5 | GPU Architecture + ML Hardware 🎮 | 61–80 |
| 6 | Operating System Fundamentals | 81–100 |
| 7 | Process + Thread Management | 101–115 |
| 8 | Memory Management (OS Side) | 116–130 |
| 9 | File Systems + Storage (OS Side) | 131–140 |
| 10 | Networking (OS + Hardware) | 141–155 |
| 11 | OS Security | 156–163 |
| 12 | Linux Deep Dive | 164–185 |
| 13 | Systems Programming in C | 186–210 |
| 14 | Performance + Profiling | 211–225 |
| 15 | Capstone Projects | 226–230 |

---
---

# ⚡ PHASE 1 — DIGITAL LOGIC + HOW COMPUTERS THINK (Day 1–15)
### 🎯 Goal: Understand how hardware actually works at the lowest level

---

### 📅 Day 1 — Number Systems 🔥
- Binary (base 2) — the language of hardware
- Decimal → Binary conversion
- Binary → Hexadecimal conversion
- Octal
- Why computers use binary (voltage levels)

> 🔁 Note: Two's complement (negative numbers) requires you to be fully comfortable with binary first. It is introduced on Day 2 after you've practiced binary thoroughly.

### 📅 Day 2 — Signed Numbers + Arithmetic 🔥
- Two's complement — how negative numbers work 🔥
- Why two's complement is used (not sign-magnitude)
- Overflow, underflow — what they mean and when they happen
- Addition and subtraction in binary
- Hexadecimal arithmetic
- Practice: convert, add, subtract in all bases

### 📅 Day 3 — Boolean Algebra 🔥
- AND, OR, NOT, NAND, NOR, XOR, XNOR
- Truth tables
- Boolean laws (De Morgan's, distributive, etc.)
- Simplifying boolean expressions
- Why this IS how transistors work 🔥

### 📅 Day 4 — Logic Gates 🔥
- Transistors → logic gates (conceptual)
- AND, OR, NOT gates physically
- NAND gate — universal gate 🔥
- Building any gate from NAND
- Gate delay concept

### 📅 Day 5 — Combinational Circuits
- Half adder, full adder 🔥
- Ripple carry adder
- Subtractor
- Multiplexer (MUX), Demultiplexer
- Encoder, Decoder
- Comparator

### 📅 Day 6 — Arithmetic Logic Unit (ALU) 🔥
- What the ALU does
- Building a simple ALU
- ALU operations (ADD, SUB, AND, OR, NOT, XOR, shift)
- Flags (zero, carry, overflow, sign) 🔥
- How Python's `+` operator reaches the ALU ⭐

### 📅 Day 7 — Sequential Circuits + Memory Elements
- Latches (SR latch, D latch)
- Flip-flops (D, JK, T) 🔥
- Registers — built from flip-flops 🔥
- Counters
- Clock signal — synchronizing everything 🔥

### 📅 Day 8 — Memory Basics
- SRAM vs DRAM concept
- How a RAM cell works
- Addressing memory
- Read/write cycles
- Why SRAM is faster but expensive

### 📅 Day 9 — How a CPU Executes Instructions 🔥
- Fetch → Decode → Execute → Write back cycle 🔥
- Program Counter (PC)
- Instruction Register (IR)
- Control Unit
- Simple CPU execution trace

### 📅 Day 10 — Instruction Set Architecture (ISA) 🔥
- What ISA is
- x86-64 basics 🔥
- ARM basics ⭐ (used in Apple Silicon, phones)
- RISC vs CISC 🔥
- Registers in x86-64 (RAX, RBX, RCX, RDX, RSP, RBP, RIP)
- Why ARM is used in ML accelerators ⭐🎮

### 📅 Day 11 — Assembly Language Basics 🔥
- Why learn assembly
- x86-64 assembly syntax (AT&T + Intel)
- `mov`, `add`, `sub`, `mul`, `div`
- `push`, `pop` — stack operations 🔥
- `jmp`, `je`, `jne` — control flow
- `call`, `ret` — function calls 🔥

### 📅 Day 12 — Assembly Deep 🔥
- Registers deep (general, segment, flags)
- Memory addressing modes
- Stack frame layout 🔥
- Function prologue/epilogue
- Calling conventions (cdecl, System V AMD64) 🔥
- How Python function calls look in assembly ⭐

### 📅 Day 13 — Floating Point Representation 🔥
- IEEE 754 standard 🔥
- Single precision (FP32) 🔥
- Double precision (FP64)
- Sign, exponent, mantissa
- Special values (NaN, Inf, -0)
- FP16, BF16 ⭐🎮 — why ML uses these
- Precision loss — why this matters in ML training ⭐🎮

> 🔁 Note: SIMD and vectorization (SSE, AVX, AVX-512) are moved to Day 15 — they require comfort with assembly and floating point first. Introducing AVX-512 before you can read assembly is too much.

### 📅 Day 14 — Digital Logic Practice
- Build adder circuit on paper
- Trace CPU fetch-decode-execute manually
- Read simple assembly programs
- Convert float to IEEE 754 manually
- Practice: write 5 short assembly programs by hand

### 📅 Day 15 — SIMD + Vectorization 🔥🎮
- SIMD concept (Single Instruction Multiple Data) 🔥
- SSE, AVX, AVX-512 instructions
- How NumPy uses SIMD ⭐🎮
- How PyTorch CPU ops use SIMD ⭐🎮
- Vectorization in compilers
- Why loops are slow, vectors are fast 🔥

> 🔁 Note: SIMD lands here after assembly (Days 11–12) and floating point (Day 13) — now you can actually understand what these instructions are doing at the register level.

### 📅 Day 15 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 1: Simple CPU Simulator (Python)
- Implement fetch-decode-execute loop
- Support 10 basic instructions
- Registers, memory, flags
- Run simple assembly programs
- Uses your Python OOP skills ⭐

---
---

# 🏗️ PHASE 2 — COMPUTER ARCHITECTURE DEEP (Day 16–35)
### 🎯 Goal: Understand how modern CPUs are designed and why

---

### 📅 Day 16 — CPU Architecture Overview 🔥
- Von Neumann architecture 🔥
- Harvard architecture
- Modern CPU block diagram
- CPU die — what's on it
- Core vs CPU vs Socket

### 📅 Day 17 — Pipelining 🔥
- Why pipelining exists
- 5-stage pipeline (IF, ID, EX, MEM, WB) 🔥
- Pipeline hazards 🔥
  - Structural hazards
  - Data hazards
  - Control hazards
- Stalls, forwarding/bypassing
- Pipeline depth tradeoffs

### 📅 Day 18 — Branch Prediction 🔥
- Why branches hurt pipelines
- Static vs dynamic prediction
- Branch prediction buffer
- Two-bit predictor
- Modern predictors (TAGE)
- Branch misprediction cost
- Why this matters for loop performance ⭐

### 📅 Day 19 — Superscalar + Out-of-Order Execution 🔥
- Superscalar — multiple execution units
- In-order vs out-of-order 🔥
- Tomasulo algorithm concept
- Reservation stations
- Register renaming
- Reorder buffer (ROB)
- Retirement

### 📅 Day 20 — Speculative Execution + Security
- Speculative execution concept
- Meltdown + Spectre vulnerabilities 🔥
- Why they happened
- Mitigations and performance impact
- Security implications for ML servers ⭐

### 📅 Day 21 — Cache Hierarchy 🔥🔥
- Why caches exist — memory wall problem 🔥
- L1, L2, L3 cache sizes and speeds 🔥
- Cache lines (64 bytes) 🔥
- Cache associativity (direct, set, fully)
- Cache replacement policies (LRU, FIFO)
- Inclusive vs exclusive caches
- How cache affects Python/NumPy performance ⭐🎮

### 📅 Day 22 — Cache Performance 🔥🎮
- Cache hits vs misses
- Cold, capacity, conflict misses
- Spatial locality 🔥
- Temporal locality 🔥
- Cache-friendly code patterns 🔥
- Matrix traversal — row vs column order 🔥🎮
- Why NumPy C-contiguous is faster ⭐🎮
- False sharing in multithreading 🔥

### 📅 Day 23 — Memory Hierarchy Full Picture 🔥
- Registers → L1 → L2 → L3 → RAM → SSD → HDD
- Latency numbers every engineer should know 🔥
- Bandwidth at each level
- Working set concept
- How PyTorch moves data through memory ⭐🎮

### 📅 Day 24 — Physical Memory + Address Basics 🔥
- Physical addresses — what they are
- How RAM is addressed
- Memory bus
- Why the CPU needs to translate addresses
- Motivation for virtual memory (preview only — full coverage in Phase 3)

> 🔁 Note: Full virtual memory (page tables, TLB, huge pages) is covered in Phase 3 (Days 41–42) after you understand physical memory deeply. Introducing it here in full would require knowledge you don't have yet.

### 📅 Day 25 — Virtual Memory Intro 🔥
- Why virtual memory exists
- Physical vs virtual addresses 🔥
- Address space concept
- Pages + page size (4KB default)
- Page table concept (surface level — deep coverage Day 41–42)
- Memory isolation between processes 🔥

### 📅 Day 26 — Instruction-Level Parallelism 🔥
- ILP concept
- Data flow graphs
- True vs false dependencies
- Amdahl's Law 🔥
- Limits of ILP
- Why single-core speed plateaued

### 📅 Day 27 — Multi-core Architecture 🔥
- Why multi-core happened
- Core interconnect
- NUMA (Non-Uniform Memory Access) 🔥
- Cache coherence problem 🔥
- MESI protocol 🔥
- Multi-socket systems
- NUMA in ML training ⭐🎮

### 📅 Day 28 — Cache Coherence Deep 🔥
- Snooping protocols
- Directory protocols
- Write-invalidate vs write-update
- Memory ordering 🔥
- Memory barriers/fences 🔥
- Why Python's GIL exists (cache coherence + CPython) ⭐

### 📅 Day 29 — CPU Performance Metrics 🔥
- IPC (Instructions Per Cycle) 🔥
- CPI (Cycles Per Instruction)
- Clock frequency vs IPC tradeoff
- FLOPS — floating point operations/second 🔥🎮
- Theoretical vs actual FLOPS
- Roofline model 🔥🎮

### 📅 Day 30 — Power + Thermal Management
- Dynamic power (CV²f)
- Static power (leakage)
- Thermal Design Power (TDP)
- Throttling
- Power states (C-states, P-states)
- Why ML GPUs have massive TDPs ⭐🎮

### 📅 Day 31 — Modern CPU Deep Dive
- Intel Core architecture overview
- AMD Zen architecture overview
- Apple M-series (unified memory) 🔥⭐🎮
- ARM Cortex overview
- Comparing architectures

### 📅 Day 32 — Motherboard + System Bus
- Motherboard components
- PCIe bus 🔥🎮 — critical for GPU
- PCIe lanes, bandwidth 🔥🎮
- NVLink concept ⭐🎮
- PCIe 4.0 vs 5.0 for ML ⭐🎮
- Chipset role

### 📅 Day 33 — Architecture Practice
- Trace a matrix multiply through cache
- Calculate cache miss rate
- Analyze memory access patterns
- Measure performance with `time` command

> 🔁 Note: Interrupts, exceptions, privilege rings, and kernel/user mode are moved to Day 81 (OS Fundamentals Phase) where they belong. These concepts require understanding what an OS is first — putting them here in Phase 2 was too early and disconnected.

### 📅 Day 34 — Architecture Revision
- Review: pipeline, cache, memory hierarchy
- Review: ILP, multi-core, coherence
- Review: FLOPS, roofline model
- Practice problems: cache sizing, bandwidth calculations

### 📅 Day 35 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 2: Cache Simulator (Python)
- Simulate L1/L2/L3 cache
- Direct-mapped + set-associative
- LRU replacement
- Count hits/misses
- Visualize access patterns
- Test with matrix traversal patterns ⭐🎮

---
---

# 🧠 PHASE 3 — MEMORY — THE FULL PICTURE (Day 36–50)
### 🎯 Goal: Understand every type of memory and how data moves

---

### 📅 Day 36 — DRAM Deep 🔥
- DRAM cell structure
- Row/column addressing (RAS, CAS)
- DRAM timing (CL, tRCD, tRP, tRAS) 🔥
- Refresh cycles
- SDRAM → DDR → DDR5 evolution
- Memory channels 🔥🎮
- Memory bandwidth calculation 🔥🎮

### 📅 Day 37 — DDR Memory 🔥🎮
- DDR4 vs DDR5 🔥
- Dual channel, quad channel 🔥🎮
- ECC memory (for servers) ⭐🎮
- Memory bandwidth vs latency tradeoff 🔥
- HBM (High Bandwidth Memory) 🔥🎮
- Why HBM is used in ML GPUs ⭐🎮
- HBM2e, HBM3 in A100/H100 ⭐🎮

### 📅 Day 38 — Memory Bandwidth + Bottlenecks 🔥🎮
- Memory bandwidth as bottleneck 🔥🎮
- Arithmetic intensity concept 🔥🎮
- Memory-bound vs compute-bound operations 🔥🎮
- Roofline model deep 🔥🎮
- Why transformers are memory-bound ⭐🎮
- Bandwidth requirements for LLM inference ⭐🎮

### 📅 Day 39 — Stack Memory 🔥
- Stack layout in memory
- Stack pointer, base pointer
- Stack frame structure 🔥
- Local variables on stack
- Stack overflow — how it happens
- Why Python has recursion limits ⭐

### 📅 Day 40 — Heap Memory 🔥
- Heap vs stack 🔥
- Dynamic allocation (`malloc`, `free` in C)
- Heap fragmentation
- Memory allocators (glibc, jemalloc, tcmalloc)
- Python's memory allocator ⭐
- How PyTorch manages GPU memory ⭐🎮

### 📅 Day 41 — Virtual Memory Deep 🔥
- Virtual address space layout 🔥
- Segments: text, data, BSS, heap, stack
- Memory-mapped files (`mmap`) 🔥
- Shared memory between processes
- Copy-on-Write (CoW) 🔥
- Page faults — major vs minor 🔥

### 📅 Day 42 — TLB + Page Tables Deep 🔥
- TLB (Translation Lookaside Buffer) 🔥
- TLB hits vs misses
- Multi-level page tables (4-level in x86-64)
- Page table walk
- 4-level page tables (PML4, PDPT, PD, PT)
- Page table entry (PTE) flags 🔥
- Huge pages (2MB, 1GB) ⭐🎮
- Why huge pages matter for ML training ⭐🎮

> 🔁 Note: TLB and page tables land here after physical memory (Days 36–38) and virtual address space (Day 41) are solid. This is the right place for deep virtual memory — not Day 25.

### 📅 Day 43 — Memory Allocation Internals 🔥
- `brk()`, `sbrk()` system calls
- `mmap()` for large allocations
- Buddy allocator
- Slab allocator
- Python's `pymalloc` ⭐
- How `gc` module interacts with OS memory ⭐

### 📅 Day 44 — Memory Mapped I/O
- Memory-mapped I/O concept
- Device registers in memory
- How GPU memory is mapped ⭐🎮
- `mmap` in Python ⭐
- File-backed memory mapping
- Anonymous memory mapping

### 📅 Day 45 — NUMA Memory 🔥🎮
- NUMA topology
- Local vs remote memory access
- NUMA nodes
- `numactl` tool
- NUMA-aware memory allocation
- Why NUMA matters for multi-GPU training ⭐🎮

### 📅 Day 46 — Memory Errors + Debugging
- Segmentation fault — what it really is 🔥
- Buffer overflow
- Use-after-free
- Memory leak detection
- `valgrind` intro
- Address Sanitizer (ASan)
- How Python protects you from most of these ⭐

### 📅 Day 47 — CPU Caches + ML Performance 🔥🎮
- Cache blocking (tiling) 🔥🎮
- Tiling matrix multiply 🔥🎮
- Why BLAS libraries are fast
- How NumPy/PyTorch use blocking ⭐🎮
- Prefetching — hardware vs software
- Cache-oblivious algorithms

### 📅 Day 48 — GPU Memory Architecture 🔥🎮
- GPU VRAM (Video RAM) 🔥🎮
- HBM vs GDDR 🔥🎮
- GPU memory hierarchy 🔥🎮
  - Global memory
  - Shared memory (SRAM) 🔥🎮
  - Registers 🔥🎮
  - L1/L2 cache
- Memory bandwidth in A100/H100 ⭐🎮
- CUDA Unified Memory ⭐🎮

### 📅 Day 49 — Memory Practice
- Measure memory bandwidth with code
- Demonstrate cache effects
- Stack vs heap allocation timing
- NUMA topology exploration

### 📅 Day 50 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 3: Memory Profiler (Python)
- Track allocations using `tracemalloc` ⭐
- Visualize heap growth
- Detect memory leaks in Python code
- Benchmark stack vs heap patterns
- Measure cache effects with NumPy ⭐🎮

---
---

# 💾 PHASE 4 — STORAGE + I/O SYSTEMS (Day 51–60)

---

### 📅 Day 51 — Storage Technologies 🔥
- HDD internals (platters, heads, seek time)
- SSD internals (NAND flash, cells) 🔥
- SLC vs MLC vs TLC vs QLC NAND
- NVMe vs SATA 🔥
- NVMe latency vs HDD latency
- Why storage speed matters for ML datasets ⭐🎮

### 📅 Day 52 — SSD Deep 🔥
- Flash memory wear
- Write amplification
- FTL (Flash Translation Layer)
- Garbage collection in SSDs
- Over-provisioning
- NVMe queues (deep queue depth) 🔥
- PCIe NVMe for ML data loading ⭐🎮

### 📅 Day 53 — I/O Stack 🔥
- Application → VFS → filesystem → block layer → driver → device
- Block devices
- Character devices
- I/O schedulers
- `read()`, `write()` system calls 🔥
- Buffered vs direct I/O

### 📅 Day 54 — I/O Patterns + Performance 🔥
- Sequential vs random I/O
- IOPS (I/O Operations Per Second)
- Throughput vs latency
- Buffered I/O (page cache) 🔥
- `fsync()` — durability
- `O_DIRECT` — bypassing page cache
- ML dataset loading patterns ⭐🎮

### 📅 Day 55 — DMA (Direct Memory Access) 🔥🎮
- What DMA is
- Why DMA exists (CPU offload)
- DMA transfer process
- PCIe DMA 🔥🎮
- GPU-CPU data transfer via DMA ⭐🎮
- `pin_memory=True` in PyTorch DataLoader ⭐🎮
- Why pinned memory speeds up GPU training ⭐🎮

### 📅 Day 56 — Interrupts + Polling + I/O Models
- Interrupt-driven I/O
- Polling I/O
- DMA I/O
- Blocking vs non-blocking I/O 🔥
- Synchronous vs asynchronous I/O 🔥
- `select`, `poll`, `epoll` 🔥
- How Python `asyncio` uses `epoll` ⭐

> 🔁 Note: Interrupts land here (Day 56) in the context of I/O — this is where they make the most intuitive sense. The deeper OS-level interrupt handling (ISRs, privilege levels, rings) comes properly at Day 83 after OS fundamentals are established.

### 📅 Day 57 — PCIe Deep 🔥🎮
- PCIe lanes and slots
- PCIe generations (3.0, 4.0, 5.0) 🔥🎮
- Bandwidth per lane
- x16 slot — GPU connection 🔥🎮
- PCIe topology
- NVLink — GPU-to-GPU direct 🔥🎮
- PCIe vs NVLink bandwidth comparison ⭐🎮

### 📅 Day 58 — Storage for ML 🔥🎮
- Dataset storage formats 🔥🎮
- Parquet, HDF5, LMDB, WebDataset ⭐🎮
- Data loading bottlenecks ⭐🎮
- `num_workers` in PyTorch DataLoader ⭐🎮
- Prefetching strategies ⭐🎮
- Distributed storage for large datasets ⭐🎮

### 📅 Day 59 — Network Storage + Distributed
- NAS, SAN concepts
- NFS, CIFS
- Object storage (S3 concept)
- Distributed filesystems (HDFS concept)
- Why cloud ML uses object storage ⭐🎮

### 📅 Day 60 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 4: I/O Benchmark Tool (Python)
- Benchmark sequential vs random read/write
- Measure buffered vs direct I/O
- Compare storage formats for ML (CSV vs Parquet vs HDF5) ⭐🎮
- Visualize results
- Identify bottlenecks

---
---

# 🎮 PHASE 5 — GPU ARCHITECTURE + ML HARDWARE (Day 61–80)
### 🎯 Goal: Understand exactly how your ML code runs on hardware

---

### 📅 Day 61 — Why GPUs for ML 🔥🎮
- CPU vs GPU design philosophy 🔥🎮
- Latency-optimized (CPU) vs throughput-optimized (GPU) 🔥🎮
- GPU parallelism — thousands of cores 🔥🎮
- Why matrix multiply maps perfectly to GPU 🔥🎮
- FLOPS: CPU vs GPU comparison 🔥🎮
- Historical context: GPU → GPGPU → ML accelerator

### 📅 Day 62 — GPU Architecture Overview 🔥🎮
- GPU die overview
- Streaming Multiprocessors (SM) 🔥🎮
- CUDA cores per SM
- Tensor Cores 🔥🎮 — dedicated for matrix math
- Memory hierarchy on GPU 🔥🎮
- Warp concept 🔥🎮

### 📅 Day 63 — CUDA Programming Model 🔥🎮
- Host (CPU) vs Device (GPU) 🔥🎮
- CUDA threads, blocks, grids 🔥🎮
- Thread hierarchy 🔥🎮
- Warp = 32 threads 🔥🎮
- SIMT execution model 🔥🎮
- Divergence — when threads take different paths 🔥🎮

### 📅 Day 64 — CUDA Memory Model 🔥🎮
- Global memory — large, slow 🔥🎮
- Shared memory — fast, small (like L1) 🔥🎮
- Registers — fastest 🔥🎮
- Constant memory, texture memory
- Memory access patterns 🔥🎮
- Coalesced memory access 🔥🎮
- Bank conflicts in shared memory 🔥🎮

### 📅 Day 65 — Writing CUDA (Conceptual + Python) 🔥🎮
- CUDA kernel concept
- `__global__`, `__device__`, `__host__`
- Thread indexing
- Simple CUDA kernel (vector add)
- Using `numba` for CUDA in Python ⭐🎮
- `torch.cuda` operations mapped to CUDA ⭐🎮

### 📅 Day 66 — Tensor Cores Deep 🔥🎮
- What Tensor Cores are 🔥🎮
- Matrix multiply-accumulate (MMA) operation 🔥🎮
- Supported dtypes (FP16, BF16, INT8, FP8) 🔥🎮
- How `torch.compile` + autocast uses Tensor Cores ⭐🎮
- Tensor Core efficiency requirements ⭐🎮
- Why batch size should be multiple of 8/16/32 ⭐🎮

### 📅 Day 67 — GPU Memory Management 🔥🎮
- VRAM capacity limits 🔥🎮
- Memory fragmentation on GPU
- `torch.cuda.memory_summary()` ⭐🎮
- `torch.cuda.empty_cache()` ⭐🎮
- Gradient checkpointing — trading compute for memory ⭐🎮
- Activation checkpointing ⭐🎮
- Why large models OOM ⭐🎮

### 📅 Day 68 — Mixed Precision + Quantization Hardware 🔥🎮
- FP32 vs FP16 vs BF16 hardware support 🔥🎮
- Why BF16 > FP16 for training ⭐🎮
- INT8 inference on Tensor Cores ⭐🎮
- FP8 (H100) ⭐🎮
- Hardware support for quantization ⭐🎮
- How `torch.amp` maps to hardware ⭐🎮

### 📅 Day 69 — GPU Occupancy + Performance 🔥🎮
- Occupancy — active warps / max warps 🔥🎮
- Register pressure
- Shared memory pressure
- Latency hiding through occupancy 🔥🎮
- How to maximize GPU utilization ⭐🎮
- `nvidia-smi` — GPU monitoring ⭐🎮

### 📅 Day 70 — GPU Profiling 🔥🎮
- `nvidia-smi` deep ⭐🎮
- NVIDIA Nsight Systems ⭐🎮
- NVIDIA Nsight Compute ⭐🎮
- `torch.profiler` mapped to GPU ops ⭐🎮
- Identifying GPU bottlenecks ⭐🎮
- Compute-bound vs memory-bound kernels ⭐🎮

### 📅 Day 71 — NVIDIA GPU Generations 🔥🎮
- Volta (V100) — first Tensor Cores 🎮
- Turing (RTX 20xx) — RT cores, INT8
- Ampere (A100, RTX 30xx) 🔥🎮
  - 3rd gen Tensor Cores
  - A100 80GB HBM2e
  - NVLink 3.0
- Hopper (H100) ⭐🎮
  - FP8 support ⭐🎮
  - Transformer Engine ⭐🎮
  - NVLink 4.0
- Ada Lovelace (RTX 40xx)
- Blackwell (B100/B200) ⭐🎮

### 📅 Day 72 — Multi-GPU Systems 🔥🎮
- Data parallelism hardware requirements 🔥🎮
- NVLink topology (NVSwitch) 🔥🎮
- PCIe topology for multi-GPU
- DGX systems (A100, H100) ⭐🎮
- All-reduce operation in hardware 🔥🎮
- Ring all-reduce algorithm 🔥🎮
- NCCL (NVIDIA Collective Communications Library) ⭐🎮

### 📅 Day 73 — Model Parallelism Hardware 🔥🎮
- Tensor parallelism hardware requirements ⭐🎮
- Pipeline parallelism hardware requirements ⭐🎮
- Why model parallel needs fast interconnects 🔥🎮
- Bandwidth requirements for different parallelism strategies ⭐🎮
- Memory requirements calculation ⭐🎮

### 📅 Day 74 — ML Accelerators Beyond NVIDIA ⭐🎮
- Google TPU architecture ⭐🎮
  - Systolic array 🔥🎮
  - TPU v4, v5 ⭐🎮
- AMD ROCm + MI300 ⭐🎮
- Apple Neural Engine ⭐🎮
- Intel Gaudi ⭐🎮
- Groq — deterministic compute ⭐🎮
- Cerebras WSE ⭐🎮

### 📅 Day 75 — Inference Hardware 🔥🎮
- Training vs inference hardware differences 🔥🎮
- Batch size 1 inference challenges 🔥🎮
- KV cache — memory requirements 🔥🎮
- Continuous batching concept ⭐🎮
- Speculative decoding hardware ⭐🎮
- Edge inference (mobile, embedded) ⭐🎮

### 📅 Day 76 — Networking for ML 🔥🎮
- InfiniBand 🔥🎮 — ML cluster networking
- RDMA (Remote Direct Memory Access) 🔥🎮
- RoCE (RDMA over Converged Ethernet) ⭐🎮
- Why networking speed matters for distributed training ⭐🎮
- 400Gb/s networking in H100 clusters ⭐🎮

### 📅 Day 77 — Roofline Model + Performance Analysis 🔥🎮
- Roofline model deep 🔥🎮
- Compute ceiling vs memory bandwidth ceiling 🔥🎮
- Arithmetic intensity of common ML ops 🔥🎮
  - Matrix multiply (compute-bound) 🔥🎮
  - Attention (memory-bound) 🔥🎮
  - Element-wise ops (memory-bound) 🔥🎮
- Optimizing for the right ceiling ⭐🎮

### 📅 Day 78 — FlashAttention + Hardware-Aware Algorithms 🔥🎮
- Why naive attention is memory-bound 🔥🎮
- FlashAttention algorithm 🔥🎮
- Tiling for SRAM ⭐🎮
- FlashAttention-2, FlashAttention-3 ⭐🎮
- How `torch.nn.functional.scaled_dot_product_attention` uses FA ⭐🎮
- Hardware-aware algorithm design ⭐🎮

### 📅 Day 79 — GPU Hardware Practice 🎮
- Profile a PyTorch training run ⭐🎮
- Identify compute vs memory bottlenecks ⭐🎮
- Optimize batch size for Tensor Core efficiency ⭐🎮
- Measure GPU memory usage patterns ⭐🎮
- Compare FP32 vs FP16 vs BF16 speed ⭐🎮

### 📅 Day 80 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 5: GPU Performance Analyzer (Python) 🎮
- Profile PyTorch models ⭐🎮
- Measure GPU utilization, memory, throughput ⭐🎮
- Roofline analysis ⭐🎮
- Compare different batch sizes, dtypes ⭐🎮
- Generate performance report ⭐🎮
- Recommend optimizations ⭐🎮

---
---

# 🖥️ PHASE 6 — OPERATING SYSTEM FUNDAMENTALS (Day 81–100)
### 🎯 Goal: Understand what the OS does and why

---

### 📅 Day 81 — What is an OS + Practical Linux Survival 🔥
- OS responsibilities
- Kernel vs user space 🔥
- System calls — the interface 🔥
- OS as resource manager
- Monolithic vs microkernel vs hybrid
- Linux kernel overview
- **Practical Linux survival kit** — tools you need from day 1:
  - `ls`, `cd`, `pwd`, `mkdir`, `rm`, `cp`, `mv`, `cat`, `less`, `grep`
  - `ps`, `top`, `htop` — seeing what's running
  - `ssh` — connecting to remote servers 🔥
  - `tmux` — keeping sessions alive 🔥
  - `screen` — alternative to tmux
  - Why you need these for ML work ⭐🎮

> 🔁 Note: `tmux`, `ssh`, and `htop` appear here at the start of the OS phase rather than Day 169 — these are tools you will use daily throughout this entire roadmap. Learning them on Day 169 is too late.

### 📅 Day 82 — Interrupts + Exceptions + Privilege Levels 🔥
- Hardware interrupts
- Software interrupts (syscalls) 🔥
- Interrupt Service Routines (ISR)
- Exception types (fault, trap, abort)
- Privilege levels (rings 0–3) 🔥
- Kernel mode vs user mode 🔥

> 🔁 Note: Interrupts and privilege rings land here (Day 82) after you understand what an OS is (Day 81). In Phase 2 these would have been disconnected — now they make full sense in the context of OS + hardware interaction.

### 📅 Day 83 — Boot Process 🔥
- Power on → BIOS/UEFI → bootloader → kernel
- BIOS vs UEFI
- GRUB bootloader
- Kernel initialization
- `init` / `systemd`
- What happens before your Python script runs ⭐

### 📅 Day 84 — System Calls 🔥
- What system calls are
- syscall interface (x86-64)
- Common syscalls (`read`, `write`, `open`, `close`, `fork`, `exec`, `exit`)
- `strace` — tracing system calls 🔥
- Syscall overhead
- How Python's `open()` becomes a syscall ⭐

> 🔁 Note: `strace` is introduced here properly with context. It was referenced on Day 83 in the original roadmap before being taught — now it's taught first.

### 📅 Day 85 — Processes 🔥
- Process concept
- Process Control Block (PCB)
- Process states (running, ready, blocked, zombie)
- `fork()` — creating processes 🔥
- `exec()` — replacing process image
- `wait()` — waiting for children
- Orphan + zombie processes

### 📅 Day 86 — Process Scheduling 🔥
- Why scheduling exists
- Scheduling criteria (CPU utilization, throughput, latency)
- Scheduling algorithms:
  - FCFS (First Come First Served)
  - SJF (Shortest Job First)
  - Round Robin 🔥
  - Priority scheduling
  - Multilevel feedback queue 🔥
- Linux CFS (Completely Fair Scheduler) 🔥

### 📅 Day 87 — Context Switching 🔥
- What context switching is
- Context switch cost 🔥
- Saving/restoring CPU state
- How often context switches happen
- Context switch overhead in Python ⭐
- Why async is better than threads for I/O ⭐

### 📅 Day 88 — Threads (OS Level) 🔥
- Process vs thread 🔥
- Kernel threads vs user threads
- Thread creation (`pthread_create`)
- Thread synchronization primitives
- Thread pool concept
- How Python threads map to OS threads ⭐

### 📅 Day 89 — Concurrency + Synchronization 🔥
- Race conditions 🔥
- Critical sections
- Mutex (mutual exclusion) 🔥
- Semaphores 🔥
- Condition variables
- Deadlock 🔥
- Deadlock conditions (Coffman conditions)
- Prevention, avoidance, detection

### 📅 Day 90 — Deadlock Deep 🔥
- Resource allocation graph
- Banker's algorithm
- Deadlock detection algorithms
- Recovery from deadlock
- Python threading deadlock examples ⭐

### 📅 Day 91 — Inter-Process Communication (IPC) 🔥
- Pipes (anonymous, named)
- Message queues
- Shared memory 🔥
- Signals
- Sockets (Unix domain)
- How Python `multiprocessing` uses IPC ⭐

### 📅 Day 92 — Signals 🔥
- What signals are
- Common signals (SIGINT, SIGTERM, SIGKILL, SIGSEGV)
- Signal handlers
- `signal` module in Python ⭐
- Handling Ctrl+C in Python programs ⭐
- ML training interruption handling ⭐🎮

### 📅 Day 93 — Memory Management (OS Intro)
- OS memory manager role
- Physical memory management
- Buddy system allocator
- Slab allocator
- `free`, `top`, `htop` commands

### 📅 Day 94 — Virtual Memory (OS Side) 🔥
- OS page table management
- Demand paging 🔥
- Page fault handling 🔥
- Swapping / swap space
- Out-of-memory (OOM) killer 🔥
- Why ML training OOMs ⭐🎮
- `vm.overcommit_memory` ⭐🎮

### 📅 Day 95 — File Systems (Intro)
- File system concept
- VFS (Virtual File System) layer
- Inodes 🔥
- Directory structure
- File permissions (Unix model) 🔥
- Hard links vs soft links

### 📅 Day 96 — Docker + Containers (Intro) 🔥🎮
- What containers are — not VMs
- Namespaces + cgroups — the two mechanisms behind Docker
- `docker run`, `docker build`, `docker ps`, `docker exec`
- Dockerfile basics
- Why Docker matters for ML ⭐🎮
- `docker run --gpus all` for GPU work ⭐🎮

> 🔁 Note: Docker gets a proper intro here rather than being assumed knowledge on Day 97 of the original. The internals (namespaces, cgroups deep) come later at Day 97.

### 📅 Day 97 — OS Scheduling for ML 🔥🎮
- CPU affinity ⭐🎮
- `taskset` — binding processes to CPUs ⭐🎮
- `nice` + `ionice` — priority setting ⭐🎮
- Real-time scheduling for inference ⭐🎮
- `numactl` for NUMA-aware ML ⭐🎮
- Setting up ML training environment ⭐🎮

### 📅 Day 98 — Kernel Modules + Drivers
- What kernel modules are
- Loading/unloading modules (`insmod`, `rmmod`, `modprobe`)
- GPU drivers (NVIDIA) 🔥🎮
- CUDA driver vs runtime ⭐🎮
- Driver installation for ML ⭐🎮

### 📅 Day 99 — OS Virtualization Deep
- Containers vs VMs 🔥
- Namespaces deep (pid, net, mnt, user) 🔥
- cgroups deep (resource limits) 🔥
- GPU passthrough in containers ⭐🎮
- NVIDIA Container Toolkit ⭐🎮

### 📅 Day 100 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 6: Process Monitor (Python)
- Monitor running processes (`/proc` filesystem)
- CPU, memory, I/O per process
- Detect zombie processes
- Signal handling
- Build a mini `htop` in Python
- Track ML training process resources ⭐🎮

---
---

# 🔄 PHASE 7 — PROCESS + THREAD MANAGEMENT (Day 101–115)

---

### 📅 Day 101 — Process Creation Deep 🔥
- `fork()` + copy-on-write 🔥
- `vfork()`
- `clone()` — Linux-specific
- `exec()` family
- Process groups, sessions
- Daemons

### 📅 Day 102 — Thread Implementation 🔥
- POSIX threads (pthreads)
- Thread creation, joining, detaching
- Thread-local storage (TLS) 🔥
- How Python's `threading` module uses pthreads ⭐
- Green threads concept
- Goroutines/coroutines comparison

### 📅 Day 103 — Mutex + Locks Deep 🔥
- Mutex internals
- Spinlock vs mutex tradeoff 🔥
- Reader-writer locks
- Recursive locks
- Priority inversion problem 🔥
- Lock-free programming concept

### 📅 Day 104 — Semaphores + Condition Variables 🔥
- Semaphore internals
- Binary vs counting semaphores
- Producer-consumer problem 🔥
- Condition variables
- Wait, signal, broadcast
- Python `threading.Condition` ⭐

### 📅 Day 105 — Classic Synchronization Problems 🔥
- Producer-Consumer 🔥
- Readers-Writers 🔥
- Dining Philosophers 🔥
- Sleeping Barber
- Implementing all in Python ⭐

### 📅 Day 106 — Atomic Operations 🔥
- What atomic means in hardware 🔥
- Compare-and-swap (CAS) 🔥
- Test-and-set
- Fetch-and-add
- `std::atomic` concept
- Python `threading` atomic patterns ⭐

### 📅 Day 107 — Lock-Free Data Structures
- Lock-free queue
- Lock-free stack
- ABA problem
- Memory ordering for lock-free code
- When lock-free is worth it

### 📅 Day 108 — CPU Scheduling Deep 🔥
- Linux CFS deep 🔥
- vruntime concept
- Red-black tree for runqueue
- Scheduling classes
- RT scheduling
- `chrt` command

### 📅 Day 109 — Load Balancing
- Per-CPU runqueues
- Load balancing algorithm
- Work stealing
- NUMA-aware scheduling
- CPU affinity for ML workers ⭐🎮

### 📅 Day 110 — Real-Time Systems Concept
- Hard vs soft real-time
- RT scheduling policies (SCHED_FIFO, SCHED_RR)
- Latency requirements
- Jitter
- Real-time inference systems ⭐🎮

### 📅 Day 111 — Process Isolation + Security
- Process isolation mechanisms
- Address space isolation
- Seccomp (syscall filtering)
- Namespaces deep
- Sandboxing ML models ⭐🎮

### 📅 Day 112 — Coroutines + Async (OS View) 🔥
- User-space threads
- Coroutine scheduling
- Event loop implementation 🔥
- How Python `asyncio` event loop uses `epoll` ⭐
- Comparison: OS threads vs coroutines

### 📅 Day 113 — `/proc` Filesystem 🔥
- `/proc` as OS interface
- `/proc/cpuinfo`, `/proc/meminfo`
- `/proc/[pid]/` — per-process info
- `/proc/[pid]/maps` — memory map 🔥
- `/proc/[pid]/fd` — open files
- Reading GPU info from `/proc` ⭐🎮

### 📅 Day 114 — Process Monitoring Tools
- `ps`, `top`, `htop`, `atop`
- `pidstat`
- `perf stat`
- `strace` deep 🔥
- `ltrace`
- Monitoring ML training processes ⭐🎮

### 📅 Day 115 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 7: Thread Pool Implementation (Python + C concept)
- Build thread pool from scratch in Python ⭐
- Work queue
- Worker threads
- Graceful shutdown
- Compare with `concurrent.futures.ThreadPoolExecutor` ⭐
- Benchmark vs Python's implementation

---
---

# 💾 PHASE 8 — MEMORY MANAGEMENT (OS SIDE) (Day 116–130)

---

### 📅 Day 116 — Physical Memory Management 🔥
- Page frame allocator
- Buddy system deep
- Memory zones (DMA, Normal, HighMem)
- `free` command internals
- `/proc/meminfo` deep

### 📅 Day 117 — Virtual Memory Implementation 🔥
- Page table implementation
- 4-level page tables (PML4, PDPT, PD, PT)
- Page table entry (PTE) flags 🔥
- `mmap()` implementation
- Anonymous vs file-backed pages

### 📅 Day 118 — Page Replacement Algorithms 🔥
- Why page replacement is needed
- FIFO algorithm
- Optimal algorithm
- LRU algorithm 🔥
- Clock algorithm
- Linux's active/inactive lists

> 🔁 Note: LRU is taught here properly. The Cache Simulator project on Day 35 used LRU — that project should be completed after Day 118, or you can revisit and deepen the LRU implementation in the Cache Simulator using what you now know.

### 📅 Day 119 — Swapping + Paging 🔥
- Swap space
- Swap partition vs swap file
- `swappiness` parameter
- Thrashing 🔥
- OOM killer 🔥
- Disabling swap for ML servers ⭐🎮

### 📅 Day 120 — Memory Mapping + Shared Memory 🔥
- `mmap()` use cases
- File-backed mmap
- Anonymous mmap
- Shared memory between processes 🔥
- `shm_open()`, `shm_unlink()`
- How Python `multiprocessing` shares arrays ⭐

### 📅 Day 121 — Huge Pages 🔥🎮
- Regular pages (4KB) vs huge pages (2MB, 1GB)
- THP (Transparent Huge Pages) 🔥🎮
- Explicit huge pages (`hugetlbfs`)
- Why huge pages help ML workloads ⭐🎮
- Configuring huge pages for ML servers ⭐🎮

### 📅 Day 122 — Memory Cgroups 🔥🎮
- Memory limits with cgroups 🔥🎮
- `memory.limit_in_bytes`
- OOM behavior in containers 🔥🎮
- Docker memory limits ⭐🎮
- GPU memory cgroups ⭐🎮
- Setting up ML containers with memory limits ⭐🎮

### 📅 Day 123 — Kernel Memory Allocators
- Slab allocator deep
- SLUB allocator (modern Linux)
- Kmalloc, vmalloc
- DMA allocations
- Memory fragmentation prevention

### 📅 Day 124 — User Space Memory Allocators 🔥
- `glibc` malloc internals
- Arena concept
- `tcmalloc` (Google) 🔥
- `jemalloc` (Facebook) 🔥
- Why PyTorch uses custom allocators ⭐🎮
- `caching_allocator` in PyTorch CUDA ⭐🎮

### 📅 Day 125 — Memory Debugging 🔥
- Valgrind deep
- Address Sanitizer (ASan)
- Memory Sanitizer (MSan)
- `electric fence`
- Python `tracemalloc` ⭐
- CUDA memory debugging ⭐🎮

### 📅 Day 126 — NUMA Memory Management 🔥🎮
- NUMA policy (local, interleave, bind)
- `libnuma`
- `numactl` usage ⭐🎮
- NUMA-aware PyTorch DataLoader ⭐🎮
- Measuring NUMA effects

### 📅 Day 127 — Memory Performance Tools
- `perf mem` — memory access profiling
- Intel VTune (concept)
- `numastat`
- `vmstat`
- `sar` for memory

### 📅 Day 128 — GPU Memory Management Deep 🔥🎮
- CUDA memory allocator internals ⭐🎮
- Caching allocator ⭐🎮
- Memory pool concept ⭐🎮
- Fragmentation on GPU 🔥🎮
- `torch.cuda.memory_stats()` ⭐🎮
- Strategies to reduce GPU OOM ⭐🎮

### 📅 Day 129 — Memory Practice
- Measure page fault rate
- Demonstrate thrashing
- Configure huge pages
- NUMA performance experiment

### 📅 Day 130 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 8: Virtual Memory Explorer (Python)
- Read `/proc/[pid]/maps` ⭐
- Visualize process address space
- Track page faults with `perf`
- Demonstrate CoW with `fork()`
- Memory usage comparison: list vs NumPy array ⭐🎮

---
---

# 📂 PHASE 9 — FILE SYSTEMS + STORAGE (OS SIDE) (Day 131–140)

---

### 📅 Day 131 — File System Concepts 🔥
- File system purpose
- Disk layout (superblock, inode table, data blocks)
- Inodes deep 🔥
- Directory entries
- Free space management (bitmap, free list)

### 📅 Day 132 — ext4 File System 🔥
- ext4 structure
- Journal (journaling) 🔥
- Extents (vs block mapping)
- `fsck`
- Mounting, unmounting
- ext4 tuning

### 📅 Day 133 — Modern File Systems
- XFS — high-performance FS
- Btrfs — copy-on-write FS
- ZFS concept
- tmpfs — RAM filesystem 🔥
- Why `/dev/shm` matters for ML ⭐🎮

### 📅 Day 134 — VFS (Virtual File System) 🔥
- VFS abstraction layer
- `inode`, `dentry`, `file`, `super_block` objects
- VFS operations
- Everything is a file philosophy 🔥
- `/proc`, `/sys`, `/dev` as filesystems 🔥

### 📅 Day 135 — File I/O Deep 🔥
- `open()`, `read()`, `write()`, `close()`
- File descriptors 🔥
- File descriptor table
- `dup()`, `dup2()`
- `fcntl()`
- File locking (`flock`, `fcntl` locks)

### 📅 Day 136 — Page Cache 🔥
- Page cache concept 🔥
- Dirty pages
- `pdflush`/`writeback`
- `sync`, `fsync`, `fdatasync`
- `posix_fadvise` — hinting access patterns
- ML dataset caching in page cache ⭐🎮

### 📅 Day 137 — `/sys` + `/proc` Filesystems 🔥
- `/sys` — hardware configuration
- `/sys/class/net` — network interfaces
- `/sys/class/drm` — GPU info 🎮
- `/proc/sys` — kernel parameters
- `sysctl` — runtime kernel config
- GPU monitoring via `/sys` ⭐🎮

### 📅 Day 138 — Storage Stack + Tools 🔥
- `lsblk` — block devices
- `fdisk`, `parted` — partitioning
- `df`, `du` — disk usage
- `iotop` — I/O monitoring
- `iostat` — I/O statistics
- `blktrace` — block I/O tracing
- Monitoring ML dataset I/O ⭐🎮

### 📅 Day 139 — Network File Systems
- NFS internals
- FUSE (Filesystem in Userspace)
- S3FS — mounting S3 as filesystem
- Dataset versioning on shared storage ⭐🎮

### 📅 Day 140 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 9: File System Analyzer (Python)
- Walk directory tree
- inode usage analysis
- Find large files, duplicates
- Page cache monitoring
- Dataset I/O profiling ⭐🎮
- Generate storage report

---
---

# 🌐 PHASE 10 — NETWORKING (OS + HARDWARE) (Day 141–155)

---

### 📅 Day 141 — Networking Fundamentals 🔥
- OSI model (7 layers) 🔥
- TCP/IP model (4 layers) 🔥
- Physical, Data Link, Network, Transport, Application
- Encapsulation/decapsulation
- Why networking matters for distributed ML ⭐🎮

### 📅 Day 142 — Physical + Data Link Layer
- Ethernet frames
- MAC addresses
- Switches vs hubs
- VLANs
- Ethernet speeds (1G, 10G, 25G, 100G, 400G) 🎮

### 📅 Day 143 — Network Layer (IP) 🔥
- IPv4 addressing
- Subnets, CIDR notation
- Routing
- ARP (Address Resolution Protocol)
- ICMP (`ping`)
- IPv6 basics

### 📅 Day 144 — Transport Layer 🔥
- TCP — reliable, ordered, connection-based 🔥
- TCP handshake (SYN, SYN-ACK, ACK) 🔥
- TCP congestion control 🔥
- UDP — fast, unreliable 🔥
- Ports
- When to use TCP vs UDP

### 📅 Day 145 — TCP Deep 🔥
- TCP state machine 🔥
- Sliding window
- Flow control
- Congestion control (Tahoe, Reno, CUBIC, BBR)
- Nagle algorithm
- `TCP_NODELAY` for low-latency ⭐🎮

### 📅 Day 146 — Socket Programming 🔥
- Socket API
- `socket()`, `bind()`, `listen()`, `accept()`, `connect()`
- `send()`, `recv()`
- Socket options (`SO_REUSEADDR`, `TCP_NODELAY`)
- How Python `socket` module works ⭐
- Non-blocking sockets

### 📅 Day 147 — Linux Network Stack 🔥
- Kernel networking path
- Network device drivers
- NAPI (interrupt mitigation)
- sk_buff (socket buffer)
- Packet processing pipeline
- Kernel bypass (DPDK concept)

### 📅 Day 148 — High-Performance Networking 🔥🎮
- RDMA (Remote Direct Memory Access) 🔥🎮
- InfiniBand for ML clusters 🔥🎮
- RoCE (RDMA over Ethernet) ⭐🎮
- Zero-copy networking 🔥
- `io_uring` ⭐
- Why fast networking = faster distributed training ⭐🎮

### 📅 Day 149 — DNS + HTTP
- DNS resolution
- HTTP/1.1, HTTP/2, HTTP/3 🔥
- TLS/SSL basics 🔥
- REST API networking ⭐
- How `requests` library makes HTTP calls ⭐

### 📅 Day 150 — Firewalls + `iptables`
- Netfilter framework
- `iptables` rules
- `nftables` (modern)
- Port forwarding
- ML server firewall setup ⭐🎮

### 📅 Day 151 — Network Performance Tools 🔥
- `netstat`, `ss` — socket stats
- `tcpdump` — packet capture 🔥
- `wireshark` — GUI packet analysis
- `iperf3` — bandwidth testing
- `ping`, `traceroute`, `mtr`
- Diagnosing distributed training issues ⭐🎮

### 📅 Day 152 — Container Networking
- Docker networking (bridge, host, overlay)
- Network namespaces
- `veth` pairs
- Kubernetes networking concept ⭐🎮
- GPU networking in containers ⭐🎮

### 📅 Day 153 — Distributed ML Networking 🔥🎮
- All-reduce bandwidth requirements 🔥🎮
- NCCL networking 🔥🎮
- Collective operations (broadcast, gather, scatter) 🔥🎮
- Network topology for ML clusters ⭐🎮
- Diagnosing slow distributed training ⭐🎮

### 📅 Day 154 — Network Security Basics
- Common attacks (DoS, MITM, packet injection)
- Encryption (TLS deep)
- SSH internals 🔥
- `fail2ban`
- Securing ML API endpoints ⭐🎮

### 📅 Day 155 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 10: Network Monitor (Python)
- Monitor network interfaces
- Capture + analyze packets
- Measure bandwidth utilization
- TCP connection tracker
- Monitor distributed training traffic ⭐🎮

---
---

# 🔒 PHASE 11 — OS SECURITY (Day 156–163)

---

### 📅 Day 156 — OS Security Fundamentals 🔥
- Authentication vs authorization
- DAC (Discretionary Access Control)
- MAC (Mandatory Access Control)
- Unix permissions (rwx) 🔥
- `setuid`, `setgid`, sticky bit

### 📅 Day 157 — Linux Security Modules
- SELinux — labels + policies
- AppArmor — path-based
- `seccomp` — syscall filtering 🔥
- Capabilities 🔥
- Securing ML containers ⭐🎮

### 📅 Day 158 — Common Vulnerabilities 🔥
- Buffer overflow 🔥
- Stack smashing
- Return-oriented programming (ROP) concept
- Format string vulnerabilities
- Integer overflow
- Why Python protects you from most ⭐
- But ML models can still be attacked ⭐🎮

### 📅 Day 159 — Kernel Security Features
- ASLR (Address Space Layout Randomization) 🔥
- Stack canaries
- NX bit (no-execute)
- PIE (Position Independent Executable)
- KASLR

### 📅 Day 160 — Container Security 🔥🎮
- Container escape vulnerabilities
- `--privileged` dangers 🔥🎮
- rootless containers
- Image scanning
- Secrets management ⭐🎮
- Securing ML API containers ⭐🎮

### 📅 Day 161 — Cryptography at OS Level
- `/dev/random` vs `/dev/urandom`
- Kernel crypto API
- Disk encryption (LUKS)
- TLS in the kernel
- Secure enclaves (SGX concept)

### 📅 Day 162 — Audit + Logging
- `auditd` — system call auditing
- Syslog, journald 🔥
- `journalctl` usage
- Log rotation
- Security monitoring for ML servers ⭐🎮

### 📅 Day 163 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 11: Security Audit Tool (Python)
- Check file permissions
- Find `setuid` binaries
- Monitor suspicious processes
- Log unusual system calls
- Audit ML API security ⭐🎮

---
---

# 🐧 PHASE 12 — LINUX DEEP DIVE (Day 164–185)
### 🎯 Goal: Master Linux for real ML engineering work

---

### 📅 Day 164 — Linux Fundamentals 🔥
- Linux directory structure (`/`, `/etc`, `/var`, `/home`, `/usr`, `/proc`, `/sys`)
- File permissions deep
- User, group, other
- `chmod`, `chown`, `chgrp`
- `umask`

### 📅 Day 165 — Shell Scripting (bash) 🔥
- Variables, arrays
- Control flow (`if`, `for`, `while`, `case`)
- Functions
- Exit codes 🔥
- Pipes and redirection (`|`, `>`, `>>`, `<`, `2>`)
- `$?`, `$$`, `$!`

### 📅 Day 166 — Shell Scripting Advanced 🔥
- `grep`, `sed`, `awk` 🔥
- `find` deep
- `xargs`
- `cut`, `sort`, `uniq`, `wc`
- Process substitution
- ML experiment shell scripts ⭐🎮

### 📅 Day 167 — Text Processing Tools 🔥
- `grep` — pattern matching 🔥
- `sed` — stream editing 🔥
- `awk` — text processing 🔥
- `jq` — JSON processing ⭐
- `csvkit` — CSV processing
- Processing ML logs ⭐🎮

### 📅 Day 168 — Process Management 🔥
- `ps aux` deep
- `kill`, `killall`
- `jobs`, `fg`, `bg`
- `nohup` — keeping processes alive 🔥
- `disown`
- `systemd` services
- Running ML training as service ⭐🎮

### 📅 Day 169 — `tmux` Deep + Remote Workflow 🔥🎮
- `tmux` sessions, windows, panes deep ⭐🎮
- Detaching + reattaching for long ML training runs ⭐🎮
- `.tmux.conf` configuration
- `screen` as alternative
- `ssh` config deep (`~/.ssh/config`) ⭐🎮
- SSH tunneling + port forwarding 🔥🎮
- `scp`, `rsync` — file transfer 🔥🎮
- SSH agent
- Connecting to GPU servers ⭐🎮

> 🔁 Note: This day goes deep on tmux and ssh. You were introduced to these on Day 81 for basic survival — here you master them properly for real ML engineering workflow.

### 📅 Day 170 — Linux Performance Tools 🔥
- `top`, `htop`, `atop`
- `vmstat` — virtual memory stats
- `iostat` — I/O stats
- `sar` — system activity reporter
- `dstat`
- Monitoring ML training ⭐🎮

### 📅 Day 171 — `perf` Tool 🔥🎮
- `perf stat` — hardware counters 🔥🎮
- `perf top` — live profiling
- `perf record` + `perf report` 🔥🎮
- Flame graphs 🔥🎮
- CPU cycles, cache misses, branch mispredictions ⭐🎮
- Profiling Python + C extensions ⭐🎮

> 🔁 Note: `perf` is properly taught here. It was referenced early in the original roadmap (Day 34) before being taught — now you learn it when you have the OS and profiling context to use it meaningfully.

### 📅 Day 172 — System Configuration
- `sysctl` — kernel parameters 🔥
- Network tuning (`net.core.*`, `net.ipv4.*`)
- Memory tuning (`vm.*`)
- File descriptor limits (`ulimit`)
- Tuning for ML training ⭐🎮

### 📅 Day 173 — Linux Namespaces + cgroups Deep 🔥🎮
- PID namespace
- Network namespace
- Mount namespace
- cgroups v1 vs v2 🔥🎮
- CPU + memory limits
- GPU cgroups (NVIDIA) ⭐🎮
- Container internals ⭐🎮

### 📅 Day 174 — Package Management
- `apt` (Debian/Ubuntu) 🔥
- `pip` interaction with system Python ⭐
- `conda` / `mamba` ⭐🎮
- CUDA toolkit installation ⭐🎮
- cuDNN installation ⭐🎮
- Managing ML environments ⭐🎮

### 📅 Day 175 — NVIDIA Tools on Linux 🔥🎮
- `nvidia-smi` deep ⭐🎮
- `nvidia-smi dmon` — monitoring ⭐🎮
- NVML (NVIDIA Management Library) ⭐🎮
- `nvtop` — GPU top ⭐🎮
- CUDA installation + verification ⭐🎮
- Driver vs CUDA toolkit versions ⭐🎮

### 📅 Day 176 — Disk + Storage Management
- `lsblk`, `fdisk`, `parted`
- LVM (Logical Volume Manager)
- RAID concepts
- `df`, `du`
- `mount`, `umount`
- Storage for ML datasets ⭐🎮

### 📅 Day 177 — Network Configuration
- `ip` command (modern) 🔥
- `ifconfig` (legacy)
- `nmcli`, `nmtui`
- Bonding + teaming (for InfiniBand) ⭐🎮
- Static IP setup for ML servers ⭐🎮

### 📅 Day 178 — `systemd` Deep 🔥
- Unit files
- Service, socket, timer units
- `systemctl` commands
- Journald logging
- Creating ML training services ⭐🎮
- Watchdog for long training runs ⭐🎮

### 📅 Day 179 — Linux Kernel Configuration
- `/boot/config-*` — kernel config
- Kernel modules
- Building custom kernel (concept)
- Kernel parameters at boot
- Disabling mitigations for performance ⭐🎮

### 📅 Day 180 — Docker on Linux Deep 🔥🎮
- Docker architecture on Linux
- `containerd`, `runc`
- Docker + NVIDIA GPU (`nvidia-docker`) 🔥🎮
- `docker run --gpus all` ⭐🎮
- NVIDIA Container Toolkit ⭐🎮
- ML Docker images (NGC) ⭐🎮

### 📅 Day 181 — Makefile + Build Systems 🔥
- `Makefile` structure 🔥
- Rules, targets, dependencies
- Variables, pattern rules
- `make` for ML projects ⭐
- `cmake` concept
- Why build systems matter for C extensions ⭐

> 🔁 Note: Makefile introduced here before C programming (Phase 13) so you have context when you start writing C code on Day 186.

### 📅 Day 182 — Linux Automation
- `cron` + `crontab`
- `systemd` timers
- Automated backups
- Automating ML experiments ⭐🎮
- `Makefile` for ML projects ⭐🎮

### 📅 Day 183 — Logging + Monitoring Stack
- `journald`
- `rsyslog`
- `logrotate`
- `Prometheus` + `Grafana` concept ⭐🎮
- GPU metrics monitoring ⭐🎮

### 📅 Day 184 🔁 — REVISION

### 📅 Day 185 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 12: ML Server Setup Script
- Full bash script to set up ML training environment ⭐🎮
- Install CUDA, cuDNN ⭐🎮
- Configure GPU settings ⭐🎮
- Set up `tmux` config ⭐🎮
- Configure monitoring (nvidia-smi logging) ⭐🎮
- Automated experiment runner ⭐🎮

---
---

# 🖥️ PHASE 13 — SYSTEMS PROGRAMMING IN C (Day 186–210)
### 🎯 Goal: Read and understand C code — the language of systems + ML kernels

---

### 📅 Day 186 — Why C for Systems 🔥
- C as the language of OS + hardware
- C compilation model
- Why Python extensions are written in C ⭐
- Why CUDA kernels use C++ ⭐🎮
- Reading C code strategy
- Setting up: `gcc`, `gdb`, `valgrind`, `make` (already covered Day 181)

### 📅 Day 187 — C Basics 🔥
- Variables, types, operators
- Control flow
- Functions
- `stdio.h` basics
- Compiling with `gcc`

### 📅 Day 188 — C Pointers 🔥🔥
- Pointer concept 🔥🔥
- Pointer arithmetic 🔥
- Pointers + arrays
- `void *` pointers
- `NULL` pointer
- Double pointers
- Why pointers are hard + why they matter

### 📅 Day 189 — C Memory Management 🔥
- `malloc`, `calloc`, `realloc`, `free` 🔥
- Memory leaks
- Dangling pointers
- Stack vs heap in C 🔥
- `sizeof` operator
- Valgrind usage

### 📅 Day 190 — C Structs + Unions 🔥
- `struct` — grouping data
- `union` — overlapping memory
- Struct padding + alignment 🔥
- Why padding matters for performance 🔥
- `typedef`
- How Python objects are C structs ⭐

### 📅 Day 191 — C Arrays + Strings 🔥
- Arrays in C — contiguous memory
- String as `char *`
- String functions (`strlen`, `strcpy`, `strcat`, `strcmp`)
- Buffer overflow risks
- Safe string handling
- How NumPy arrays relate to C arrays ⭐🎮

### 📅 Day 192 — C File I/O 🔥
- `fopen`, `fclose`, `fread`, `fwrite`
- `fprintf`, `fscanf`
- `fseek`, `ftell`
- Binary file I/O
- File descriptors vs FILE*

### 📅 Day 193 — C System Calls 🔥
- `open`, `read`, `write`, `close`
- `stat`, `lstat`
- `fork`, `exec`, `wait`
- `pipe`, `dup2`
- Error handling with `errno`
- `perror`, `strerror`

### 📅 Day 194 — C Processes + Signals
- `fork()` in C 🔥
- `exec()` family
- `wait()`, `waitpid()`
- Signal handlers in C
- `sigaction()`

### 📅 Day 195 — C Threads (pthreads) 🔥
- `pthread_create`, `pthread_join`
- Mutexes in C
- Condition variables in C
- Thread-local storage
- How Python uses pthreads ⭐

### 📅 Day 196 — C Network Programming 🔥
- Socket API in C
- TCP server/client in C
- `select()`, `poll()`
- Non-blocking I/O in C
- How Python's socket module wraps this ⭐

### 📅 Day 197 — C Preprocessor + Build Systems
- `#define`, `#include`, `#ifdef`
- Macros
- Header files
- `Makefile` deep revisit 🔥
- `cmake` concept
- How Python C extensions are built ⭐

### 📅 Day 198 — Python C Extensions 🔥
- CPython C API ⭐
- `PyObject` — the base of everything ⭐
- Reference counting in C (how Python GC works) ⭐
- Writing a simple C extension
- `cffi` for calling C from Python ⭐
- How NumPy is implemented in C ⭐🎮

### 📅 Day 199 — Reading C Code Strategy 🔥
- How to navigate a C codebase
- Reading CPython source ⭐
- Reading CUDA kernel code ⭐🎮
- Reading NumPy C code ⭐🎮
- Common C patterns in ML libraries ⭐🎮

### 📅 Day 200 — C++ Basics (for CUDA) 🔥🎮
- C++ vs C differences
- Classes in C++
- Templates (concept) 🔥🎮
- `std::vector`, `std::string`
- RAII pattern 🔥
- Why CUDA uses C++ ⭐🎮

### 📅 Day 201 — CUDA C++ Basics 🔥🎮
- CUDA kernel syntax 🔥🎮
- `__global__`, `__device__`, `__host__`
- Thread indexing patterns 🔥🎮
- Memory allocation (`cudaMalloc`, `cudaFree`)
- `cudaMemcpy` 🔥🎮
- Simple vector add kernel

### 📅 Day 202 — CUDA Optimization 🔥🎮
- Shared memory usage 🔥🎮
- Memory coalescing 🔥🎮
- Warp divergence avoidance 🔥🎮
- Occupancy optimization
- `__syncthreads()`
- Reading PyTorch CUDA kernels ⭐🎮

### 📅 Day 203 — Triton (Python GPU Programming) ⭐🎮
- Triton — write GPU kernels in Python ⭐🎮
- `@triton.jit` decorator ⭐🎮
- Triton vs CUDA 🔥🎮
- FlashAttention in Triton ⭐🎮
- Writing a simple Triton kernel ⭐🎮
- How `torch.compile` generates Triton ⭐🎮

### 📅 Day 204 — Reading ML Library Source 🔥🎮
- Reading PyTorch ATEN operators ⭐🎮
- Reading NumPy C code ⭐🎮
- Finding where `torch.matmul` calls cuBLAS ⭐🎮
- Reading CUDA kernel in PyTorch ⭐🎮

### 📅 Day 205 — Performance Optimization in C 🔥
- Loop unrolling
- Inlining
- Compiler optimizations (`-O0`, `-O1`, `-O2`, `-O3`)
- Compiler intrinsics
- Profile-guided optimization
- How these apply to ML libraries ⭐🎮

### 📅 Day 206 — Memory Alignment + SIMD in C 🔥🎮
- Memory alignment for SIMD
- `aligned_alloc`
- SSE/AVX intrinsics (reading)
- Auto-vectorization
- Why NumPy uses aligned memory ⭐🎮

### 📅 Day 207 — Debugging C Programs
- `gdb` deep 🔥
- Breakpoints, watchpoints
- Backtrace
- Core dumps
- `gdb` + Python debugging ⭐
- Debugging segfaults from Python ⭐

### 📅 Day 208 — C Standard Library Deep
- `string.h`, `math.h`, `stdlib.h`
- `time.h` for benchmarking
- `assert.h`
- `limits.h`
- Understanding what Python wraps ⭐

### 📅 Day 209 — Systems Programming Practice
- Write a memory allocator in C
- Implement a thread pool in C
- Write a simple shell in C
- Implement basic data structures in C

### 📅 Day 210 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 13: Custom Memory Allocator (C)
- Implement `malloc`/`free` from scratch
- Free list management
- Coalescing free blocks
- Benchmarks vs system `malloc`
- Understand PyTorch's CUDA allocator ⭐🎮

---
---

# ⚡ PHASE 14 — PERFORMANCE + PROFILING (Day 211–225)

---

### 📅 Day 211 — Performance Mindset 🔥
- Measure first, optimize second 🔥
- Amdahl's law 🔥
- Bottleneck identification
- Performance vs correctness
- Benchmarking methodology

### 📅 Day 212 — CPU Profiling 🔥
- `perf` deep revisit (first taught Day 171)
- Flame graphs 🔥
- `gprof`
- Sampling vs instrumentation profiling
- Python `cProfile` + C extensions ⭐

### 📅 Day 213 — Memory Profiling 🔥
- `valgrind massif` — heap profiling
- `heaptrack`
- `perf mem`
- Python `tracemalloc` ⭐
- GPU memory profiling ⭐🎮

### 📅 Day 214 — I/O Profiling 🔥
- `iostat`, `iotop`
- `blktrace`
- `strace` for I/O
- `perf trace`
- DataLoader I/O profiling ⭐🎮

### 📅 Day 215 — Network Profiling 🔥🎮
- `iperf3`
- `ss` — socket statistics
- `netstat`
- NCCL profiling ⭐🎮
- Distributed training communication profiling ⭐🎮

### 📅 Day 216 — GPU Profiling Deep 🔥🎮
- Nsight Systems deep ⭐🎮
- Nsight Compute deep ⭐🎮
- `torch.profiler` with Chrome trace ⭐🎮
- Kernel execution time ⭐🎮
- Memory transfer time ⭐🎮
- Compute vs memory bound ⭐🎮

### 📅 Day 217 — Benchmarking Methodology 🔥
- Warmup runs
- Statistical significance
- Measuring variance
- `perf stat` for micro-benchmarks
- `hyperfine` — command benchmarking
- `timeit` in Python ⭐

### 📅 Day 218 — Compiler Optimizations 🔥
- What compilers do automatically
- `-O2`, `-O3` effects
- Loop vectorization
- Inlining decisions
- Link-time optimization (LTO)
- How `torch.compile` does JIT optimization ⭐🎮

### 📅 Day 219 — Cache Optimization Techniques 🔥🎮
- Loop interchange for cache 🔥
- Tiling / blocking 🔥🎮
- Prefetching
- Data structure layout for cache
- AoS vs SoA (Array of Structs vs Struct of Arrays) 🔥🎮

### 📅 Day 220 — Concurrency Performance 🔥
- Lock contention profiling
- False sharing elimination 🔥
- Thread pool sizing
- Work stealing
- Async I/O performance
- DataLoader worker performance ⭐🎮

### 📅 Day 221 — Full System Performance Analysis 🔥🎮
- Identifying the real bottleneck 🔥
- CPU → Memory → I/O → Network → GPU
- End-to-end ML training profiling ⭐🎮
- Identifying data loading bottlenecks ⭐🎮
- Identifying GPU underutilization ⭐🎮

### 📅 Day 222 — Performance Optimization for ML 🔥🎮
- Mixed precision training performance ⭐🎮
- `torch.compile` performance gains ⭐🎮
- Batch size tuning ⭐🎮
- DataLoader `num_workers` tuning ⭐🎮
- `pin_memory` impact ⭐🎮
- CUDA stream optimization ⭐🎮

### 📅 Day 223 — Energy Efficiency
- Power profiling (`perf power`)
- RAPL (Running Average Power Limit)
- GPU power management ⭐🎮
- Energy per token for LLMs ⭐🎮
- Green ML concepts ⭐🎮

### 📅 Day 224 — Performance Practice
- Profile a full ML training run ⭐🎮
- Find top 3 bottlenecks
- Fix each one
- Measure improvement

### 📅 Day 225 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 14: Full ML Training Performance Suite ⭐🎮
- Automated profiling pipeline ⭐🎮
- CPU + GPU + Memory + I/O profiling ⭐🎮
- Flame graph generation ⭐🎮
- Bottleneck detection ⭐🎮
- Optimization recommendations ⭐🎮
- Before/after comparison ⭐🎮

---
---

# 🏆 PHASE 15 — CAPSTONE PROJECTS (Day 226–230)

---

### 🛠️ PROJECT 15: Mini OS Kernel (Day 226–227)
**Build a tiny bootable kernel**
- Bootloader (GRUB or custom)
- Protected mode switch
- Basic interrupt handling
- Simple memory manager
- Print to screen
- Language: C + Assembly
- Understand every line of code

### 🛠️ PROJECT 16: ML Hardware Optimizer (Day 228–229) ⭐🎮
**Full hardware-aware ML training optimizer**
- Automatic mixed precision selection ⭐🎮
- Optimal batch size finder ⭐🎮
- DataLoader tuning ⭐🎮
- GPU memory optimizer ⭐🎮
- CPU/GPU profiling integration ⭐🎮
- NUMA-aware data loading ⭐🎮
- Full performance report ⭐🎮

### 🛠️ PROJECT 17: Systems Knowledge Portfolio (Day 230)
**Document everything you've learned**
- Write technical blog posts for each phase
- GitHub repo with all projects
- CPU simulator
- Cache simulator
- GPU profiler
- Memory profiler
- Mini kernel
- Performance suite

---
---

# 📚 LEARNING RESOURCES

| Resource | Phase |
|---|---|
| "Computer Organization and Design" — Patterson & Hennessy | 1–5 |
| "Computer Systems: A Programmer's Perspective" (CS:APP) 🔥 | 1–5, 8, 13 |
| "Operating Systems: Three Easy Pieces" (OSTEP) 🔥 — FREE online | 6–11 |
| "The Linux Programming Interface" — Kerrisk | 12–13 |
| "Programming from the Ground Up" — Bartlett (free) | 1 |
| nand2tetris (nand2tetris.org) 🔥 — build a computer from scratch | 1–3 |
| MIT 6.004 — Computation Structures | 2 |
| MIT 6.828 — OS Engineering | 6–9 |
| "CUDA by Example" | 5 |
| NVIDIA CUDA Programming Guide | 5, 13 |
| "Linux Kernel Development" — Love | 12 |
| Andrej Karpathy — GPU programming talks 🔥🎮 | 5 |
| Simon Boehm — "How to Optimize a CUDA Matmul" 🔥🎮 | 5, 13 |

---

# ⭐ ML CONNECTIONS SUMMARY

> All the things this roadmap explains about YOUR ML code:

| What You See in ML | What's Really Happening |
|---|---|
| `torch.cuda.empty_cache()` | Freeing CUDA caching allocator blocks |
| `pin_memory=True` in DataLoader | Pinning pages so DMA can transfer directly |
| `num_workers=8` | OS-level process creation + IPC |
| `batch_size=32` (multiple of 8) | Tensor Core efficiency requirements |
| BF16 training faster than FP32 | Hardware FP units + Tensor Core support |
| `torch.compile()` speedup | Kernel fusion + Triton JIT compilation |
| OOM during training | GPU VRAM exhausted, caching allocator failed |
| Slow data loading | I/O bound — SSD/CPU bottleneck not GPU |
| NaN loss | Floating point overflow / gradient explosion |
| DDP all-reduce | Ring all-reduce over NVLink/InfiniBand |
| `model.half()` | FP16 — half the memory bandwidth required |
| FlashAttention speedup | Tiling attention for SRAM, avoiding HBM roundtrips |
| `gradient_checkpointing` | Trading compute for memory — recompute activations |

---

# ✅ END GOAL — After 230 Days You Will:

- Understand how computers work from transistors to OS
- Know exactly what happens when your ML code runs on hardware
- Read and understand CUDA kernels
- Write basic C + CUDA code
- Profile and optimize ML training at hardware level
- Set up and manage Linux ML servers
- Debug hardware-level issues in ML systems
- Understand why ML hardware design decisions are made
- Be able to read any systems paper or hardware spec sheet
