# 🐍🤖 360-Day Python → ML Engineer Roadmap
### Goal: Computer Vision + NLP/LLM Engineer
### Daily Commitment: 3–4 hours/day

> ⭐ = Changed significantly in recent versions — pay extra attention
> 🔥 = Critical concept — must master deeply
> 🛠️ = Project day
> 🔁 = Revision day

---

## 📌 OVERVIEW

| Phase | Topic | Days |
|---|---|---|
| 1 | Core Python Foundation | 1–20 |
| 2 | Core Python Features (Stdlib) | 21–45 |
| 3 | OOP + Advanced Python | 46–70 |
| 4 | Python Internals + Concurrency | 71–90 |
| 5 | Dev Tooling + Packaging | 91–100 |
| 6 | Math Foundation (NEW) 🔥 | 101–120 |
| 7 | DSA in Pure Python | 121–140 |
| 8 | SQL (NEW) 🔥 | 141–144 |
| 9 | Jupyter + Colab + `requests` (NEW) | 145–148 |
| 10 | NumPy ⭐ | 149–163 |
| 11 | `scipy` basics (NEW) | 164–166 |
| 12 | Pandas ⭐ | 167–181 |
| 13 | `polars` basics (NEW) ⭐ | 182–184 |
| 14 | Data Visualization | 185–192 |
| 15 | Scikit-learn + Classical ML | 193–214 |
| 16 | PyTorch ⭐🔥 | 215–252 |
| 17 | `einops` (NEW) ⭐ | 253–254 |
| 18 | Computer Vision (OpenCV + PyTorch) ⭐ | 255–284 |
| 19 | `timm` deep (NEW) ⭐ | 285–286 |
| 20 | CV Evaluation deep (NEW) 🔥 | 287–289 |
| 21 | Stable Diffusion deep (NEW) ⭐🔥 | 290–293 |
| 22 | Audio + Whisper (NEW) ⭐ | 294–296 |
| 23 | NLP + LLMs ⭐🔥 | 297–326 |
| 24 | Retrieval Systems deep (NEW) ⭐🔥 | 327–329 |
| 25 | RLHF + DPO (NEW) ⭐🔥 | 330–333 |
| 26 | LLM Evaluation (NEW) ⭐ | 334–335 |
| 27 | ML Engineering + Deployment | 336–350 |
| 28 | Paper Reading + Implementation (NEW) 🔥 | 351–354 |
| 29 | Final Capstone Projects | 355–360 |

---
---

# 🧱 PHASE 1 — CORE PYTHON FOUNDATION (Day 1–20)
### 🎯 Goal: Build rock-solid base with zero confusion later

---

### 📅 Day 1 — How Python Works
- How the interpreter runs your code ✅
- Bytecode overview (`.pyc`) 
- REPL vs scripts
- Variables, dynamic typing
- `print`, `input` basics

### 📅 Day 2 — Data Types + Memory
- `int`, `float`, `bool`, `str`
- `id()`, `type()`, `isinstance()`
- Memory references
- Mutability intro
- Integer caching (`-5` to `256`) 🔥
- String interning 🔥

### 📅 Day 3 — Operators 🔥
- Arithmetic, logical, comparison
- Bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`)
- `is` vs `==` — identity vs equality
- Walrus operator (`:=`) ⭐
- Operator precedence

### 📅 Day 4 — Strings (Part 1)
- String creation, indexing, slicing
- Immutability — why and how
- `len`, `in`, `not in`
- String concatenation + repetition
- Raw strings, escape characters

### 📅 Day 5 — Strings (Part 2)
- All string methods
- f-strings deep ⭐
- String formatting (`.format()`, `%`)
- Encoding basics (UTF-8, ASCII)
- `encode()`, `decode()`

### 📅 Day 6 — Lists + Tuples
- List creation, indexing, slicing
- List methods (`append`, `extend`, `insert`, `remove`, `pop`, `sort`, `reverse`)
- List internals (dynamic array)
- Tuples — immutability reason and use cases
- Named tuples intro

### 📅 Day 7 — Sets + Dicts 🔥
- Sets — hashing concept, uniqueness
- Set operations (union, intersection, difference)
- Dicts — hash table internals
- Dict methods (`keys`, `values`, `items`, `get`, `update`, `pop`)
- Dict ordering (Python 3.7+) ⭐

### 📅 Day 8 — Mutability Deep 🔥
- Mutable vs immutable types
- Shallow copy vs deep copy (`copy` module)
- `copy.copy()` vs `copy.deepcopy()`
- Why this matters in functions
- Common bugs from mutability

### 📅 Day 9 — Control Flow
- `if`, `elif`, `else`
- `match` statement (structural pattern matching) ⭐🔥
- Truthy/falsy values — ALL cases
- Ternary expressions
- `__bool__`, `__len__` connection

### 📅 Day 10 — Loops
- `for` loops — iteration model
- `while` loops
- `break`, `continue`, `pass`
- `else` on loops
- `range()` internals
- Nested loops + performance awareness

### 📅 Day 11 — Functions (Part 1)
- Defining functions
- Return values (multiple returns)
- Stack frames concept 🔥
- Recursion + recursion limit
- `sys.setrecursionlimit`

### 📅 Day 12 — Functions (Part 2)
- Positional, keyword arguments
- `*args`, `**kwargs` 🔥
- Default argument pitfalls (mutable defaults) 🔥
- Keyword-only arguments (`*`)
- Positional-only arguments (`/`) ⭐
- Function annotations

### 📅 Day 13 — Built-in Functions 🔥
- `len`, `sum`, `min`, `max`, `abs`, `round`
- `sorted(key=)`, `reversed`
- `zip`, `enumerate`, `map`, `filter`
- `any`, `all`
- `range`, `iter`, `next`
- `isinstance`, `issubclass`, `callable`

### 📅 Day 14 — Functional Programming Basics
- `map`, `filter` deep
- `functools.reduce`
- When to use vs comprehensions
- Pure functions concept
- Side effects awareness

### 📅 Day 15 — Iteration Protocol 🔥
- `__iter__`, `__next__`
- How `for` loop really works
- `StopIteration`
- Custom iterable class
- `iter()` with sentinel

### 📅 Day 16 — Comprehensions 🔥
- List comprehensions
- Dict comprehensions
- Set comprehensions
- Nested comprehensions
- When NOT to use them
- Performance vs readability

### 📅 Day 17 — Lambda + Closures 🔥
- Lambda functions — limits and anti-patterns
- Closures — what they capture
- LEGB rule
- `nonlocal`, `global`
- Cell variables

### 📅 Day 18 — Error Handling (Part 1)
- `try`, `except`, `else`, `finally`
- Exception hierarchy
- Catching multiple exceptions
- `traceback` module
- `sys.exc_info()`

### 📅 Day 19 — Error Handling (Part 2)
- Custom exceptions
- `raise`, `raise from`
- Exception chaining
- Warnings (`warnings` module)
- Best practices

### 📅 Day 20 🔁 — REVISION + MINI PROJECT

### 🛠️ PROJECT 1: Pure Python CLI Calculator
- OOP based
- Full error handling
- Supports history, memory
- Uses: functions, loops, exceptions, f-strings

---
---

# ⚙️ PHASE 2 — CORE PYTHON FEATURES (Day 21–45)

---

### 📅 Day 21 — Modules + Imports 🔥
- `import`, `from ... import`
- `__name__`, `__main__`
- Module search path (`sys.path`)
- Relative vs absolute imports
- Import caching (`sys.modules`)

### 📅 Day 22 — Python Execution Model
- Bytecode compilation
- `.pyc` files, `__pycache__`
- `compile()`, `exec()`, `eval()`
- Code objects intro

### 📅 Day 23 — File Handling (Part 1)
- `open()` — all modes
- Text vs binary files
- `read()`, `readline()`, `readlines()`
- `write()`, `writelines()`
- `with` statement preview

### 📅 Day 24 — File Handling (Part 2)
- `seek()`, `tell()`
- Buffering
- `io` module (`StringIO`, `BytesIO`)
- File encoding handling
- OS file interaction basics

### 📅 Day 25 — Filesystem (`os`, `pathlib`) ⭐
- `os.path` basics
- `pathlib.Path` ⭐🔥
- File/directory operations
- `shutil` — copy, move, delete
- `tempfile`
- Glob patterns

### 📅 Day 26 — `os`, `sys`, `subprocess`
- `os.environ`
- `os.getcwd()`, `os.listdir()`
- `sys.argv`, `sys.exit`, `sys.path`
- `subprocess`
- `signal` module basics

### 📅 Day 27 — `collections` Module 🔥
- `Counter`
- `defaultdict`
- `OrderedDict`
- `deque`
- `namedtuple`
- `ChainMap`

### 📅 Day 28 — `itertools` 🔥
- `chain`, `cycle`, `repeat`
- `product`, `permutations`, `combinations`
- `groupby`
- `islice`, `takewhile`, `dropwhile`
- `accumulate`

### 📅 Day 29 — `functools` 🔥
- `reduce`
- `lru_cache` / `cache` ⭐
- `partial`
- `wraps`
- `total_ordering`
- `singledispatch`

### 📅 Day 30 — Generators (Part 1) 🔥
- `yield` deep
- Generator functions vs regular functions
- Lazy evaluation
- `next()`, `StopIteration`
- Generator state

### 📅 Day 31 — Generators (Part 2) 🔥
- Generator expressions
- `.send()`, `.throw()`, `.close()` 🔥
- `yield from` ⭐
- Infinite generators
- Pipelines with generators

### 📅 Day 32 — Regex (`re`) 🔥
- Basic patterns
- Groups, named groups
- Lookahead, lookbehind
- `re.match`, `re.search`, `re.findall`, `re.sub`
- Compiled patterns, flags
- Regex for text preprocessing (NLP preview)

### 📅 Day 33 — Serialization 🔥
- JSON deep — `dumps`, `loads`, custom encoders
- Pickle — how it works + security risks 🔥
- `struct` — binary data packing
- `marshal`

### 📅 Day 34 — Date, Time, Math
- `datetime`, `time`, `calendar`
- `math` module
- `statistics` module
- `decimal` — precision handling 🔥
- Floating point behavior 🔥

### 📅 Day 35 — `random` + `secrets`
- `random` module deep
- `secrets` ⭐
- `hashlib`
- `hmac`
- Timing attacks + `hmac.compare_digest` 🔥

### 📅 Day 36 — CLI Tools
- `sys.argv` deep
- `argparse` full usage 🔥
- Subcommands, types, defaults
- `configparser`
- `tomllib` ⭐

### 📅 Day 37 — `requests` + `httpx` (NEW) ⭐🔥
- `requests` — GET, POST, headers, params
- Downloading datasets with `requests`
- Calling REST APIs (HuggingFace, OpenAI)
- `httpx` — async HTTP client ⭐
- Error handling in HTTP calls
- JSON response handling

### 📅 Day 38 — `sqlite3` 🔥
- Connecting, creating tables
- CRUD operations
- Parameterized queries
- Transactions
- Row factories
- `executemany`

### 📅 Day 39 — `enum`, `dataclasses` deep ⭐
- `enum.Enum`, `IntEnum`, `Flag`
- `@dataclass`
- `field()`, `__post_init__`
- Frozen dataclasses
- `dataclasses` vs `namedtuple`

### 📅 Day 40 — `typing` Module ⭐🔥
- Basic annotations
- `List`, `Dict`, `Tuple`, `Optional`, `Union`
- `TypeVar`, generics ⭐
- `Protocol` ⭐🔥
- `Literal`, `Final`, `ClassVar`
- `ParamSpec` ⭐
- `Annotated`, `Self` ⭐
- `TypeGuard`, `Overload`

### 📅 Day 41 — `contextlib` + Context Managers 🔥
- `with` statement deep
- `__enter__`, `__exit__`
- Custom context managers
- `contextlib.contextmanager`
- `contextlib.suppress`
- `contextlib.ExitStack` ⭐

### 📅 Day 42 — `inspect` + Introspection 🔥
- `inspect.signature`
- `inspect.getsource`
- `inspect.getmembers`
- `dir()`, `getattr()`, `setattr()`, `hasattr()`
- `vars()`, `__dict__`

### 📅 Day 43 — `logging` Module 🔥
- Logger, Handler, Formatter
- Log levels
- File + console handlers
- Structured logging ⭐
- Best practices

### 📅 Day 44 — `unittest` + `pytest` 🔥
- `unittest` — TestCase, assertions
- Mocking (`unittest.mock`) 🔥
- `pytest` basics ⭐
- Fixtures, parametrize
- Coverage intro

### 📅 Day 45 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 2: OOP Task Manager
- Full CRUD with `sqlite3`
- `dataclasses` for models
- `argparse` CLI
- `logging` for all actions
- `unittest` tests
- `pathlib` for file ops

---
---

# 🧠 PHASE 3 — OOP + ADVANCED PYTHON (Day 46–70)

---

### 📅 Day 46 — Classes + Objects (Part 1)
- Class definition, instantiation
- Instance vs class attributes
- `__init__` deep
- `self` explained properly
- Object identity

### 📅 Day 47 — Classes + Objects (Part 2)
- `__repr__`, `__str__` 🔥
- `__eq__`, `__hash__`
- `__lt__`, `__le__`, `__gt__`, `__ge__`
- `__len__`, `__bool__`
- `__contains__`

### 📅 Day 48 — Method Types 🔥
- Instance methods
- `@classmethod`
- `@staticmethod`
- When to use each
- `__new__` vs `__init__` 🔥

### 📅 Day 49 — Inheritance (Part 1)
- Single inheritance
- `super()` internals 🔥
- `__class_cell__` 🔥
- Method resolution
- `isinstance`, `issubclass`

### 📅 Day 50 — Inheritance (Part 2) + MRO 🔥
- Multiple inheritance
- MRO — C3 linearization 🔥
- Diamond problem
- `__mro__`
- Mixin pattern 🔥

### 📅 Day 51 — Polymorphism + Duck Typing 🔥
- Method overriding
- Operator overloading
- Duck typing philosophy
- `__call__`
- `__init_subclass__` ⭐

### 📅 Day 52 — Encapsulation + Properties 🔥
- Public, protected, private
- Name mangling
- `@property` 🔥
- `@setter`, `@deleter`
- `__slots__` 🔥

### 📅 Day 53 — Abstraction 🔥
- `abc` module
- `ABC`, `ABCMeta`
- `@abstractmethod`
- Abstract class patterns
- Composition vs inheritance 🔥

### 📅 Day 54 — Descriptors 🔥
- What descriptors are
- Data vs non-data descriptors
- `__get__`, `__set__`, `__delete__`
- `__set_name__` ⭐🔥
- How `@property` works internally

### 📅 Day 55 — Decorators (Part 1) 🔥
- Decorator basics
- `@wraps`
- Stacking decorators
- Decorators with arguments
- Class-based decorators 🔥

### 📅 Day 56 — Decorators (Part 2) 🔥
- `@property` as descriptor
- `@staticmethod`, `@classmethod` internals
- `@lru_cache`, `@cache` ⭐
- `@dataclass` internals
- Real-world patterns

### 📅 Day 57 — Metaclasses 🔥
- What metaclasses are
- `type` — the metaclass of all classes
- Custom metaclass
- `__prepare__` 🔥
- `__build_class__` 🔥

### 📅 Day 58 — Object Model Deep 🔥
- `__getattr__` vs `__getattribute__` 🔥
- `__setattr__`, `__delattr__`
- `__dict__` vs `__slots__`
- `__del__` finalizers
- Object lifecycle

### 📅 Day 59 — Design Patterns (Pythonic) 🔥
- Singleton
- Factory + Abstract Factory
- Observer 🔥
- Strategy 🔥
- Command
- Repository
- Dependency Injection
- Mixin

### 📅 Day 60 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 3: Pure Python Mini ORM
- Custom `Model` base class with metaclass
- Descriptors for field definitions
- `sqlite3` backend
- Full CRUD + relationships
- Query chaining API

---

### 📅 Day 61 — Advanced Iteration Patterns
- Custom iterators
- Infinite iterators
- Chaining iterables
- Memory-efficient pipelines

### 📅 Day 62 — Advanced Generators 🔥
- Coroutines via generators
- `yield from` deep ⭐
- Generator-based state machines
- `throw()` and `close()` patterns

### 📅 Day 63 — Advanced Closures + Scoping
- Cell variables deep
- Late binding in closures 🔥
- `nonlocal` patterns
- Factory functions

### 📅 Day 64 — Advanced Type System ⭐🔥
- `Protocol` deep
- `TypeVar` bounds + constraints
- Generic classes
- `overload` decorator
- `mypy` — running type checks

### 📅 Day 65 — `__future__` + Compatibility ⭐
- `from __future__ import annotations`
- PEP 563 vs PEP 649 ⭐
- Python version differences
- Compatibility patterns

### 📅 Day 66 — Advanced `dataclasses` ⭐
- `__post_init__` patterns
- `InitVar`, `KW_ONLY` ⭐
- `field(default_factory=)`
- Inheritance with dataclasses
- `dataclasses.replace()`

### 📅 Day 67 — Advanced Error Handling
- Exception groups ⭐ (Python 3.11+)
- `ExceptionGroup`, `except*` ⭐🔥
- Error handling strategies
- Retry patterns

### 📅 Day 68 — Advanced Data Structures
- Implementing linked list
- Stack, queue from scratch
- Binary search tree
- Hash map from scratch 🔥
- `heapq` module

### 📅 Day 69 — `weakref` + Memory Patterns
- Weak references
- `weakref.ref`, `WeakValueDictionary`
- Circular references
- Observer pattern with weakrefs

### 📅 Day 70 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 4: Design Patterns Showcase
- Event system (Observer)
- Plugin system (Factory + Registry)
- Configuration system (Singleton + Strategy)
- Full type hints
- `pytest` tests

---
---

# 🧬 PHASE 4 — INTERNALS + CONCURRENCY (Day 71–90)

---

### 📅 Day 71 — Memory Management 🔥
- Reference counting deep
- `sys.getrefcount()`
- Object size (`sys.getsizeof`)
- Memory layout of Python objects

### 📅 Day 72 — Garbage Collection 🔥
- `gc` module deep
- Cyclic garbage collector
- Generations (0, 1, 2)
- `tracemalloc` ⭐
- Finding memory leaks

### 📅 Day 73 — Python Object Model 🔥
- Everything is an object
- Type hierarchy
- Frame objects (`sys._getframe`) 🔥
- Code objects (`__code__`) 🔥
- Python startup sequence

### 📅 Day 74 — Bytecode + AST 🔥
- `dis` module
- Reading bytecode output
- `ast` module
- `ast.parse()`, `ast.dump()`
- `compile()` pipeline

### 📅 Day 75 — Import System Deep 🔥
- `importlib` deep
- Import hooks
- `sys.meta_path`
- Custom importers

### 📅 Day 76 — GIL 🔥
- What GIL is and why it exists
- GIL impact on threading
- GIL removal in Python 3.13 ⭐🔥
- When GIL matters

### 📅 Day 77 — Threading 🔥
- `threading.Thread`
- Locks, RLocks, Semaphores, Events
- Race conditions 🔥
- Thread safety patterns
- `queue.Queue`

### 📅 Day 78 — Multiprocessing 🔥
- `multiprocessing.Process`
- `Pool`, `map`, `starmap`
- Shared memory ⭐
- `Pipe`, `Queue`

### 📅 Day 79 — `concurrent.futures` ⭐🔥
- `ThreadPoolExecutor`
- `ProcessPoolExecutor`
- `Future` objects
- `as_completed`, `wait`
- Error handling in futures

### 📅 Day 80 — Async Python (Part 1) 🔥
- `async def`, `await`
- `asyncio.run()` ⭐
- `asyncio.create_task()`
- `asyncio.gather()`
- Event loop basics

### 📅 Day 81 — Async Python (Part 2) ⭐🔥
- `asyncio.TaskGroup` ⭐
- Task cancellation
- `asyncio.timeout()` ⭐
- `asyncio.Queue`
- Async generators ⭐

### 📅 Day 82 — Async Python (Part 3) 🔥
- Event loop deep
- `asyncio` protocols + transports
- `asyncio.StreamReader`, `StreamWriter`

### 📅 Day 83 — Sockets 🔥
- TCP/IP basics
- `socket` module
- TCP server + client
- Non-blocking sockets
- `ssl` module

### 📅 Day 84 — Profiling + Optimization 🔥
- `cProfile`, `profile`
- `timeit`
- `tracemalloc`
- Optimization strategies

### 📅 Day 85 — `ctypes` + C Interop
- `ctypes` — calling C libraries
- Why NumPy is fast (C under hood)
- Concept of Cython

### 📅 Day 86 — Debugging 🔥
- `pdb` deep
- `breakpoint()` ⭐
- Stack traces
- Debugging async code

### 📅 Day 87 — Python 3.12/3.13 New Features ⭐🔥
- Type parameter syntax ⭐
- `@override` decorator ⭐
- f-string improvements ⭐
- GIL removal (3.13) ⭐
- `ExceptionGroup` (3.11) ⭐

### 📅 Day 88 — Reading Large Codebases
- How to navigate big projects
- Understanding `__init__.py` structure
- Reading CPython source (intro)

### 📅 Day 89 🔁 — REVISION

### 📅 Day 90 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 5: Raw TCP Chat Application
- Pure `socket` + `threading`
- Multi-client server
- `asyncio` version (refactor)
- `logging` throughout
- Zero external libraries

---
---

# 🛠️ PHASE 5 — DEV TOOLING + PACKAGING (Day 91–100)

---

### 📅 Day 91 — Git Basics 🔥
- `init`, `add`, `commit`, `push`, `pull`
- Branching, merging
- `.gitignore` for Python
- `git log`, `git diff`

### 📅 Day 92 — Git Advanced + GitHub
- Rebasing, stashing
- GitHub workflow
- Pull requests
- GitHub Actions basics ⭐

### 📅 Day 93 — Virtual Environments + `pip`
- `venv` deep
- `pip` — install, freeze, requirements
- Environment isolation

### 📅 Day 94 — Modern Packaging ⭐🔥
- `pyproject.toml` ⭐🔥
- `poetry` ⭐
- Building wheels
- Publishing to PyPI

### 📅 Day 95 — Code Quality Tools ⭐
- `black` ⭐
- `ruff` ⭐🔥
- `mypy` ⭐
- `pre-commit` ⭐

### 📅 Day 96 — `pytest` Deep ⭐🔥
- Fixtures (scope, yield)
- `parametrize`, markers
- `monkeypatch`, `tmp_path`
- Coverage (`pytest-cov`) ⭐

### 📅 Day 97 — Documentation
- Docstrings (Google, NumPy style) ⭐
- README best practices
- Type hints as documentation

### 📅 Day 98 — CI/CD ⭐
- GitHub Actions for Python ⭐
- Running tests on push
- Linting in CI
- Docker basics for Python

### 📅 Day 99 — Project Structure Best Practices
- `src` layout vs flat layout ⭐
- Configuration management
- Environment variables
- Logging setup

### 📅 Day 100 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 6: Professional Python Library
- Small reusable utility library
- Full `pyproject.toml`
- `pytest` tests 90%+ coverage
- Type hints throughout
- `ruff` + `mypy` clean
- GitHub Actions CI

---
---

# 📐 PHASE 6 — MATH FOUNDATION (NEW) 🔥 (Day 101–120)
### 🎯 Goal: Understand WHY ML works, not just HOW to run it

---

### 📅 Day 101 — Linear Algebra (Part 1) 🔥
- Scalars, vectors, matrices — proper definitions
- Vector operations (add, subtract, dot product)
- Matrix addition, subtraction
- Scalar multiplication
- Implementing in pure Python 🔥

### 📅 Day 102 — Linear Algebra (Part 2) 🔥
- Matrix multiplication (manual) 🔥
- Transpose
- Identity matrix
- Why matrix multiplication matters in neural networks 🔥

### 📅 Day 103 — Linear Algebra (Part 3) 🔥
- Determinant
- Inverse matrix
- Linear systems (Ax = b)
- Eigenvalues + eigenvectors concept 🔥
- SVD concept 🔥
- How PCA uses SVD (preview)

### 📅 Day 104 — Linear Algebra (Part 4) — Spaces 🔥
- Vector spaces
- Span, basis, rank
- Orthogonality
- Projections 🔥
- Why this matters for attention mechanism (preview)

### 📅 Day 105 — Calculus (Part 1) 🔥
- Derivatives — proper understanding
- Rules (chain rule, product rule) 🔥
- Partial derivatives 🔥
- Gradients 🔥
- Implementing numerical gradients in Python

### 📅 Day 106 — Calculus (Part 2) 🔥
- Chain rule deep — this IS backpropagation 🔥
- Computational graphs manually 🔥
- Implementing autodiff from scratch 🔥
- Why PyTorch autograd works the way it does

### 📅 Day 107 — Calculus (Part 3) — Optimization 🔥
- Gradient descent from scratch 🔥
- Learning rate — what it really does 🔥
- Convex vs non-convex functions
- Local minima, saddle points
- Momentum concept

### 📅 Day 108 — Probability (Part 1) 🔥
- Sample space, events
- Probability rules
- Conditional probability 🔥
- Bayes theorem 🔥 — this is everywhere in ML
- Implementing in Python

### 📅 Day 109 — Probability (Part 2) 🔥
- Random variables
- Distributions (uniform, normal, binomial, Bernoulli)
- PDF, CDF
- Expectation, variance
- Central Limit Theorem 🔥

### 📅 Day 110 — Probability (Part 3) — ML Probability 🔥
- Maximum Likelihood Estimation (MLE) 🔥
- MAP estimation
- Why cross-entropy IS negative log likelihood 🔥
- Gaussian distributions in ML

### 📅 Day 111 — Statistics (Part 1) 🔥
- Descriptive statistics deep
- Mean, median, mode, variance, std
- Covariance, correlation 🔥
- `statistics` module
- Implementing from scratch

### 📅 Day 112 — Statistics (Part 2) 🔥
- Hypothesis testing concept
- p-values (concept only)
- Confidence intervals
- A/B testing basics
- Why this matters for ML evaluation

### 📅 Day 113 — Information Theory 🔥🔥
- Entropy — what it really means 🔥
- Cross-entropy 🔥 — this IS your classification loss
- KL divergence 🔥 — used in VAEs, RL
- Mutual information
- Implementing all from scratch in Python

### 📅 Day 114 — Math for Neural Networks 🔥🔥
- Forward pass as matrix multiplication 🔥
- Loss functions mathematically 🔥
- Backpropagation full math 🔥
- Gradient flow through layers
- Vanishing/exploding gradients — math reason 🔥

### 📅 Day 115 — Math for CV 🔥
- Convolution operation mathematically 🔥
- Correlation vs convolution
- Fourier transform concept
- Why convolutions detect features
- Implementing 2D convolution from scratch

### 📅 Day 116 — Math for NLP 🔥
- Dot product similarity 🔥
- Cosine similarity 🔥
- Softmax — math + implementation 🔥
- Attention score math 🔥
- Word embeddings as vector spaces

### 📅 Day 117 — Numerical Computing 🔥
- Floating point precision issues 🔥
- Numerical stability (log-sum-exp trick) 🔥
- `math` vs `numpy` precision
- `decimal` for exact computation
- Why this matters in loss functions

### 📅 Day 118 — Pure Python ML Math Implementation 🔥
- Implement: sigmoid, ReLU, tanh, softmax
- Implement: MSE, cross-entropy, binary cross-entropy
- Implement: gradient descent
- Implement: simple linear regression with math

### 📅 Day 119 — Pure Python Neural Network 🔥🔥
- Build a 2-layer neural network from scratch
- Forward pass
- Backpropagation from scratch 🔥🔥
- Weight updates
- Train on simple dataset

### 📅 Day 120 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 7: Pure Python ML Library
- Linear regression
- Logistic regression
- 2-layer neural network
- All math implemented from scratch
- No NumPy — pure Python only
- `pytest` tests

---
---

# 🔢 PHASE 7 — DSA IN PURE PYTHON (Day 121–140)

---

### 📅 Day 121 — Complexity Analysis 🔥
- Big O notation
- Time + space complexity
- O(1), O(n), O(n²), O(log n), O(n log n)
- Analyzing Python code complexity
- Best/worst/average case

### 📅 Day 122 — Arrays + Linked Lists
- Array internals
- Singly linked list from scratch
- Doubly linked list
- Time complexity comparison

### 📅 Day 123 — Stacks + Queues
- Stack from scratch
- Queue from scratch
- Deque from scratch
- Applications (balanced brackets, BFS)

### 📅 Day 124 — Hash Maps from Scratch 🔥
- Hash function design
- Collision handling
- Building a HashMap class
- Why Python dict is O(1)

### 📅 Day 125 — Trees (Part 1)
- Binary tree
- BST (Binary Search Tree)
- Traversals (inorder, preorder, postorder)

### 📅 Day 126 — Trees (Part 2) + Heaps
- BFS, DFS
- Heap from scratch
- `heapq` module
- Priority queue

### 📅 Day 127 — Graphs
- Adjacency list, adjacency matrix
- BFS, DFS on graphs
- Shortest path concept
- Applications in ML (GNN preview)

### 📅 Day 128 — Sorting Algorithms 🔥
- Bubble, selection, insertion
- Merge sort 🔥
- Quick sort 🔥
- Python's Timsort

### 📅 Day 129 — Searching + Two Pointers
- Binary search 🔥
- Two pointer technique
- Sliding window

### 📅 Day 130 — Recursion + Dynamic Programming
- Recursion patterns
- Memoization 🔥
- Tabulation
- Classic DP (fibonacci, knapsack)

### 📅 Day 131 — String Algorithms
- String matching
- Trie data structure
- Why this matters for NLP tokenization

### 📅 Day 132 — Matrix Algorithms 🔥
- Matrix traversal
- Spiral order, rotate matrix
- Why this matters for CV

### 📅 Day 133 — Bit Manipulation
- Bit operations
- Common tricks
- XOR patterns

### 📅 Day 134 — DSA Practice (Part 1)
- 15 problems: arrays, strings, linked lists

### 📅 Day 135 — DSA Practice (Part 2)
- 15 problems: trees, graphs, DP

### 📅 Day 136–139 — DSA Practice (Part 3)
- 20 problems: mixed difficulty
- Focus on patterns used in ML code

### 📅 Day 140 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 8: Data Structures Library
- Implement all major data structures
- Full OOP design
- `pytest` tests for all
- Time complexity documented

---
---

# 🗄️ PHASE 8 — SQL (NEW) 🔥 (Day 141–144)

---

### 📅 Day 141 — SQL Fundamentals 🔥
- `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`
- `INSERT`, `UPDATE`, `DELETE`
- Data types in SQL
- `CREATE TABLE`, `ALTER TABLE`
- Primary keys, foreign keys
- Using `sqlite3` for all practice

### 📅 Day 142 — SQL Intermediate 🔥
- `JOIN` (INNER, LEFT, RIGHT, FULL) 🔥
- `GROUP BY`, `HAVING`
- Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)
- Subqueries
- `UNION`, `INTERSECT`

### 📅 Day 143 — SQL Advanced
- Window functions 🔥 (`ROW_NUMBER`, `RANK`, `LAG`, `LEAD`)
- CTEs (Common Table Expressions) 🔥
- Indexes — what they are and why they matter
- Transactions (`COMMIT`, `ROLLBACK`)
- Query optimization basics

### 📅 Day 144 — SQL + Python Integration 🔥
- `sqlite3` deep revisit
- SQL + Pandas (`pd.read_sql`) ⭐
- Building a data pipeline with SQL + Python
- Real dataset: query, analyze, export

---
---

# 📓 PHASE 9 — JUPYTER + COLAB + REQUESTS (NEW) (Day 145–148)

---

### 📅 Day 145 — Jupyter Workflow 🔥
- Jupyter notebook basics
- Cell types (code, markdown, raw)
- Magic commands (`%timeit`, `%matplotlib inline`, `%%time`)
- Keyboard shortcuts
- Notebook best practices
- Organizing ML experiments in notebooks

### 📅 Day 146 — Google Colab 🔥
- Colab interface
- Connecting to GPU/TPU ⭐
- Mounting Google Drive
- Installing packages in Colab
- Running training in Colab
- Saving checkpoints to Drive
- Colab Pro tips ⭐

### 📅 Day 147 — `requests` Deep ⭐🔥
- Already introduced Day 37 — now go deep
- Sessions, authentication
- Downloading large files with progress
- Streaming responses
- Rate limiting + retry logic
- Calling HuggingFace API
- Calling OpenAI API

### 📅 Day 148 — `httpx` + REST APIs ⭐
- `httpx` async client ⭐
- Async API calls in ML pipelines
- HuggingFace Hub API deep ⭐
- Kaggle API — downloading datasets ⭐
- Building a dataset downloader tool

---
---

# 🔢 PHASE 10 — NUMPY ⭐ (Day 149–163)

> ⭐ NumPy 2.0 changed significantly

---

### 📅 Day 149 — NumPy Basics ⭐
- `ndarray` — the core object
- Creating arrays (`array`, `zeros`, `ones`, `arange`, `linspace`)
- `dtype` ⭐
- `shape`, `ndim`, `size`

### 📅 Day 150 — NumPy Indexing + Slicing 🔥
- Basic indexing
- Slicing (views vs copies) 🔥
- Boolean indexing 🔥
- Fancy indexing
- `np.newaxis`, Ellipsis

### 📅 Day 151 — NumPy Operations 🔥
- Element-wise operations
- Broadcasting 🔥🔥
- Universal functions (ufuncs)
- `np.sum`, `np.mean`, `np.std`
- Axis parameter 🔥

### 📅 Day 152 — NumPy Linear Algebra 🔥
- `np.dot`, `np.matmul`, `@`
- `np.linalg.inv`, `np.linalg.det`
- `np.linalg.eig`
- `np.linalg.svd`
- `np.linalg.solve`

### 📅 Day 153 — NumPy Reshaping + Manipulation
- `reshape`, `ravel`, `flatten`
- `transpose`, `.T`
- `stack`, `hstack`, `vstack`, `concatenate`
- `squeeze`, `expand_dims`

### 📅 Day 154 — NumPy Random ⭐🔥
- `np.random.Generator` ⭐
- `rng = np.random.default_rng()` ⭐
- Seeding properly ⭐
- Old vs new random API 🔥

### 📅 Day 155 — NumPy Memory + Performance 🔥
- C-contiguous vs F-contiguous
- Views vs copies 🔥
- Memory layout and speed
- `np.ascontiguousarray`

### 📅 Day 156 — NumPy Advanced ⭐
- `np.where` 🔥
- `np.select`, `np.clip`
- `np.unique`, `np.argsort`
- `np.nan` handling ⭐
- Structured arrays

### 📅 Day 157 — NumPy 2.0 Changes ⭐🔥
- Breaking changes ⭐
- `copy` keyword changes ⭐
- `StringDType` ⭐
- Deprecated features removed ⭐

### 📅 Day 158 — NumPy for ML 🔥
- Vectorizing ML math
- Batch operations
- Why NumPy ops faster than loops 🔥
- Implementing matrix ops from Phase 6 in NumPy

### 📅 Day 159 — NumPy FFT + Signal Processing 🔥
- `np.fft.fft`, `np.fft.ifft`
- `np.fft.fft2` for images
- Frequency domain concept 🔥
- Why FFT matters for audio/CV

### 📅 Day 160 — NumPy + Images 🔥
- Images as NumPy arrays
- RGB channels
- Pixel manipulation
- Normalization 🔥
- Resizing concept

### 📅 Day 161 — NumPy File I/O
- `np.save`, `np.load`
- `.npy`, `.npz` formats
- Reading CSVs with NumPy

### 📅 Day 162 — NumPy Practice
- 20 problems mixing all NumPy concepts
- Focus on broadcasting, indexing, linalg

### 📅 Day 163 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 9: NumPy Image Processor
- Load images as NumPy arrays
- Implement filters manually
- Histogram equalization
- FFT-based frequency filtering
- No OpenCV — pure NumPy

---
---

# 🔬 PHASE 11 — SCIPY BASICS (NEW) 🔥 (Day 164–166)

---

### 📅 Day 164 — `scipy.linalg` + `scipy.stats` 🔥
- `scipy.linalg` — more complete than `np.linalg`
- `scipy.stats` — statistical distributions 🔥
- Statistical tests (`ttest`, `chi2`)
- `norm.pdf`, `norm.cdf`
- Why this matters for ML evaluation

### 📅 Day 165 — `scipy.signal` 🔥
- Convolution (`scipy.signal.convolve2d`) 🔥
- Filtering (low-pass, high-pass, band-pass)
- Spectrogram (`scipy.signal.spectrogram`)
- Why this matters for audio ML
- Comparing with manual implementation

### 📅 Day 166 — `scipy.optimize` + `scipy.spatial`
- `scipy.optimize.minimize` 🔥
- Curve fitting
- `scipy.spatial.distance` — distance metrics 🔥
- Cosine distance, euclidean distance
- Why distance metrics matter for embeddings/RAG

---
---

# 🐼 PHASE 12 — PANDAS ⭐ (Day 167–181)

> ⭐ Pandas 2.0 + 3.0 changed significantly

---

### 📅 Day 167 — Pandas Basics ⭐
- `Series` and `DataFrame`
- Creating from dicts, lists, CSV
- `pd.ArrowDtype` ⭐
- Basic inspection (`head`, `info`, `describe`)

### 📅 Day 168 — Pandas Indexing 🔥
- `loc` vs `iloc` 🔥
- Boolean indexing
- `at`, `iat`
- MultiIndex, setting index

### 📅 Day 169 — Pandas Data Cleaning 🔥
- Handling missing data
- `dropna`, `fillna`, `interpolate`
- `drop_duplicates`
- `pd.NA` vs `np.nan` ⭐🔥

### 📅 Day 170 — Pandas Operations
- Arithmetic operations
- `apply`, `map` ⭐ (`applymap` deprecated)
- `transform`, `assign`
- String operations (`.str`)

### 📅 Day 171 — Pandas GroupBy 🔥
- `groupby` deep
- Aggregation functions
- `agg` with multiple functions
- Named aggregations ⭐

### 📅 Day 172 — Pandas Merging + Joining 🔥
- `merge` (inner, outer, left, right)
- `join`, `concat`
- `merge_asof` ⭐

### 📅 Day 173 — Pandas Reshaping
- `pivot`, `pivot_table`
- `melt`, `stack`, `unstack`
- `crosstab`

### 📅 Day 174 — Pandas Time Series ⭐
- `DatetimeIndex`
- `resample`
- Rolling, expanding windows
- Time zone handling ⭐

### 📅 Day 175 — Pandas Performance ⭐🔥
- Copy-on-Write (CoW) ⭐🔥
- `inplace` deprecation ⭐
- `query`, `eval`
- Arrow backend ⭐

### 📅 Day 176 — Pandas I/O ⭐
- CSV, Excel, JSON
- Parquet ⭐🔥
- SQL with Pandas

### 📅 Day 177 — Pandas 2.x/3.x Changes ⭐🔥
- CoW full explanation ⭐🔥
- Nullable dtypes ⭐
- Migration guide ⭐

### 📅 Day 178 — Pandas + NumPy Integration 🔥
- `.to_numpy()` ⭐
- `__array__` protocol
- Efficient conversion

### 📅 Day 179–180 — Pandas Practice
- EDA on real dataset
- Full cleaning + feature engineering pipeline

### 📅 Day 181 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 10: End-to-End EDA Pipeline
- Real dataset
- Full cleaning pipeline
- Feature engineering
- Statistical analysis
- Export clean data for ML

---
---

# 🐻‍❄️ PHASE 13 — POLARS BASICS (NEW) ⭐🔥 (Day 182–184)

---

### 📅 Day 182 — Polars Basics ⭐🔥
- Why Polars exists (faster than Pandas for large data)
- `DataFrame` + `Series` in Polars
- Lazy vs eager API 🔥
- `pl.scan_csv` vs `pl.read_csv`
- Basic operations

### 📅 Day 183 — Polars Operations ⭐🔥
- `select`, `filter`, `with_columns`
- `groupby`, `agg`
- `join` types
- Expression API 🔥
- Polars vs Pandas syntax comparison

### 📅 Day 184 — Polars for ML Pipelines ⭐
- When to use Polars vs Pandas 🔥
- Large dataset processing
- Converting to NumPy/PyTorch tensors
- Parquet with Polars ⭐
- Building a data pipeline

---
---

# 📊 PHASE 14 — DATA VISUALIZATION (Day 185–192)

---

### 📅 Day 185 — Matplotlib Basics ⭐
- Figure, Axes model 🔥
- Line, scatter, bar, histogram
- Subplots, styling

### 📅 Day 186 — Matplotlib Advanced
- Annotations, custom ticks
- Twin axes, 3D plots basics
- Saving figures

### 📅 Day 187 — Seaborn ⭐
- `seaborn` v0.13 changes ⭐
- Statistical plots
- `displot`, `relplot`, `catplot`
- Heatmaps 🔥

### 📅 Day 188 — Plotly ⭐
- Interactive plots ⭐
- `plotly.express`
- 3D scatter, surface

### 📅 Day 189 — ML Visualizations 🔥
- Confusion matrix heatmap
- ROC curve
- Learning curves
- Feature importance plots

### 📅 Day 190 — Image Visualization
- Plotting images with matplotlib
- Grid of images
- Plotting filters, kernels
- Activation maps preview

### 📅 Day 191 — Visualization Best Practices
- Choosing right chart
- Color theory basics
- Telling a story with data

### 📅 Day 192 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 11: Full Data Story
- Dataset → Clean → Analyze → Visualize
- 10+ chart types
- Interactive Plotly dashboard

---
---

# 🤖 PHASE 15 — SCIKIT-LEARN + CLASSICAL ML (Day 193–214)

---

### 📅 Day 193 — ML Fundamentals 🔥
- Supervised vs unsupervised
- Classification vs regression
- Train/val/test split
- Overfitting, underfitting 🔥
- Bias-variance tradeoff 🔥

### 📅 Day 194 — Scikit-learn API ⭐🔥
- `fit`, `transform`, `predict`
- `Pipeline` 🔥
- `ColumnTransformer` ⭐
- `set_output(transform="pandas")` ⭐

### 📅 Day 195 — Data Preprocessing 🔥
- `StandardScaler`, `MinMaxScaler`
- `LabelEncoder`, `OneHotEncoder` ⭐
- `SimpleImputer`
- Feature scaling importance

### 📅 Day 196 — Linear Models 🔥
- Linear Regression
- Logistic Regression
- Ridge, Lasso, ElasticNet
- Regularization deep 🔥

### 📅 Day 197 — Tree Models 🔥
- Decision Tree
- How trees split (Gini, entropy)
- Overfitting in trees

### 📅 Day 198 — Ensemble Methods 🔥
- Random Forest 🔥
- Bagging concept
- Boosting concept
- Feature importance

### 📅 Day 199 — XGBoost + LightGBM ⭐🔥
- XGBoost ⭐
- LightGBM ⭐
- Hyperparameters + early stopping ⭐

### 📅 Day 200 — SVM + KNN
- Support Vector Machine
- Kernel trick
- KNN — distance metrics

### 📅 Day 201 — Clustering 🔥
- K-Means
- DBSCAN
- Evaluation (silhouette score)

### 📅 Day 202 — Dimensionality Reduction 🔥
- PCA — math intuition 🔥
- t-SNE 🔥
- UMAP ⭐

### 📅 Day 203 — Model Evaluation 🔥
- Accuracy, precision, recall, F1
- ROC-AUC 🔥
- Confusion matrix
- Regression metrics (MAE, MSE, R²)

### 📅 Day 204 — Cross Validation + Hyperparameter Tuning 🔥
- `KFold`, `StratifiedKFold`
- `GridSearchCV`, `RandomizedSearchCV`
- `HalvingGridSearchCV` ⭐
- `Optuna` intro ⭐

### 📅 Day 205 — Pipelines Deep ⭐🔥
- Full pipeline with preprocessing + model
- Custom transformers
- `set_output` API ⭐

### 📅 Day 206 — Feature Engineering for ML 🔥
- Creating features
- Target encoding ⭐
- Feature selection

### 📅 Day 207 — Imbalanced Data ⭐
- SMOTE ⭐
- Class weights
- Evaluation on imbalanced data

### 📅 Day 208 — Scikit-learn New Features ⭐
- `set_output` API ⭐
- `HalvingGridSearchCV` ⭐
- Metadata routing ⭐

### 📅 Day 209 — ML Project Workflow 🔥
- Problem framing
- EDA → Feature engineering → Model → Evaluate → Deploy

### 📅 Day 210–213 — Classical ML Practice
- 2 full end-to-end ML projects

### 📅 Day 214 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 12: End-to-End Classical ML Pipeline
- Real dataset
- Full preprocessing pipeline
- Multiple models + comparison
- Hyperparameter tuning
- Full evaluation report
- `mlflow` tracking ⭐

---
---

# 🔥 PHASE 16 — PYTORCH ⭐🔥 (Day 215–252)

> ⭐ PyTorch 2.x changed significantly

---

### 📅 Day 215 — PyTorch Basics ⭐🔥
- Tensors — the core object
- Creating tensors
- `dtype`, `device` 🔥
- CPU vs GPU tensors
- `torch.tensor` vs `torch.Tensor` ⭐

### 📅 Day 216 — Tensor Operations 🔥
- Arithmetic, broadcasting
- `torch.matmul`, `@`
- Indexing, slicing
- `view`, `reshape` ⭐🔥
- `contiguous()` 🔥

### 📅 Day 217 — Autograd 🔥🔥
- `requires_grad=True`
- `.backward()` 🔥
- Computation graph 🔥
- `torch.no_grad()` ⭐🔥
- `detach()` 🔥

### 📅 Day 218 — `nn.Module` 🔥🔥
- Building models with `nn.Module`
- `__init__` + `forward()`
- `parameters()`, `named_parameters()`
- `state_dict()`, `load_state_dict()` 🔥

### 📅 Day 219 — Loss Functions + Optimizers 🔥
- `nn.MSELoss`, `nn.CrossEntropyLoss`, `nn.BCELoss`
- `torch.optim.SGD`, `Adam`, `AdamW` ⭐🔥
- Learning rate schedulers ⭐
- `optimizer.zero_grad()` 🔥
- Gradient clipping 🔥

### 📅 Day 220 — Training Loop 🔥🔥
- Full training loop pattern
- `model.train()`, `model.eval()` 🔥
- Validation loop
- Saving best model
- `torch.compile()` ⭐🔥

### 📅 Day 221 — Datasets + DataLoaders ⭐🔥
- `torch.utils.data.Dataset`
- Custom `Dataset` class 🔥
- `DataLoader` — batching, shuffling
- `num_workers`, `pin_memory` ⭐
- Transforms

### 📅 Day 222 — Neural Network Layers 🔥
- `nn.Linear`
- Activation functions
- `nn.Dropout` ⭐
- `nn.BatchNorm1d`, `nn.LayerNorm` 🔥
- `nn.Sequential`

### 📅 Day 223 — Convolutional Layers 🔥🔥
- `nn.Conv2d` deep
- Kernels, stride, padding 🔥
- `nn.MaxPool2d`
- Feature maps
- Receptive field

### 📅 Day 224 — CNN Architecture 🔥
- Building CNN from scratch
- LeNet, AlexNet concept
- VGG concept
- Skip connections concept

### 📅 Day 225 — Transfer Learning ⭐🔥
- `torchvision.models` ⭐
- Pretrained models (ResNet, EfficientNet, ViT) ⭐
- Freezing layers 🔥
- Fine-tuning 🔥

### 📅 Day 226 — `torch.compile` + PyTorch 2.x ⭐🔥
- `torch.compile()` ⭐🔥
- `torch.amp` mixed precision ⭐🔥
- `torch.autocast` ⭐
- Performance improvements ⭐

### 📅 Day 227 — RNN + LSTM + GRU 🔥
- Recurrent networks concept
- `nn.RNN`, `nn.LSTM`, `nn.GRU`
- Hidden state, cell state 🔥
- Bidirectional RNNs

### 📅 Day 228 — Attention Mechanism 🔥🔥
- Self-attention deep 🔥🔥
- Query, Key, Value 🔥
- Scaled dot-product attention
- Multi-head attention 🔥

### 📅 Day 229 — Transformer Architecture 🔥🔥
- Encoder-decoder structure 🔥
- Positional encoding 🔥
- Feed-forward layers
- Layer normalization 🔥
- Building transformer from scratch

### 📅 Day 230 — PyTorch GPU + CUDA ⭐🔥
- `.to(device)` pattern
- GPU memory management ⭐
- `torch.cuda.empty_cache()` ⭐

### 📅 Day 231 — Mixed Precision Training ⭐🔥
- `torch.amp.autocast` ⭐
- `GradScaler` ⭐
- Why FP16/BF16 matters ⭐🔥

### 📅 Day 232 — Experiment Tracking ⭐
- `mlflow` ⭐
- `wandb` ⭐🔥
- Logging metrics, params, artifacts

### 📅 Day 233 — Regularization Techniques 🔥
- L1, L2 regularization
- Dropout patterns
- `BatchNorm` as regularizer
- Early stopping

### 📅 Day 234 — Custom Loss + Layers 🔥
- Custom `nn.Module` layers
- Custom loss functions
- `torch.autograd.Function` 🔥
- Gradient hooks

### 📅 Day 235 — `torchvision` ⭐🔥
- `torchvision.transforms` v2 ⭐🔥
- `torchvision.datasets`
- `torchvision.models` ⭐
- `torchvision.ops` ⭐

### 📅 Day 236 — Deep Learning Theory 🔥
- Backpropagation math deep 🔥
- Vanishing/exploding gradients 🔥
- Weight initialization (Xavier, He) 🔥

### 📅 Day 237 — Optimizers Deep 🔥
- SGD, Adam, AdamW comparison 🔥
- Learning rate scheduling strategies 🔥
- `CosineAnnealingLR` ⭐
- `OneCycleLR` ⭐

### 📅 Day 238 — PyTorch Profiler ⭐
- `torch.profiler` ⭐
- Finding bottlenecks
- Optimizing training loops

### 📅 Day 239 — Model Checkpointing + Deployment Prep
- Saving/loading checkpoints
- TorchScript ⭐
- ONNX export ⭐🔥

### 📅 Day 240–245 — PyTorch Practice
- Build and train 3 models from scratch

### 📅 Day 246 🔁 — REVISION

### 📅 Day 247–251 — PyTorch Deep Practice
- Implement attention from scratch
- Implement transformer from scratch
- Train on real dataset

### 📅 Day 252 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 13: Image Classifier (Full PyTorch)
- Custom `Dataset` + `DataLoader`
- CNN architecture (custom)
- Transfer learning (ResNet fine-tune)
- Mixed precision training ⭐
- `wandb` experiment tracking ⭐
- Full evaluation + visualization

---
---

# 🔀 PHASE 17 — EINOPS (NEW) ⭐🔥 (Day 253–254)

---

### 📅 Day 253 — `einops` Basics ⭐🔥
- Why `einops` exists — tensor manipulation problem
- `rearrange` — reshape with named dimensions 🔥
- `reduce` — reduction with names
- `repeat` — broadcasting with names
- Reading einops notation 🔥

### 📅 Day 254 — `einops` in Practice ⭐🔥
- Using `einops` in CNN code
- Using `einops` in Transformer code
- `einops.layers.torch` for `nn.Module`
- Reading modern paper code with einops 🔥
- Rewriting Phase 16 transformer code with einops

---
---

# 👁️ PHASE 18 — COMPUTER VISION (Day 255–284)

---

### 📅 Day 255 — OpenCV Basics ⭐
- `cv2` intro
- Reading, displaying, saving images
- Color spaces (BGR vs RGB) 🔥
- `cv2.cvtColor`

### 📅 Day 256 — OpenCV Image Operations
- Resizing, cropping, rotating
- Flipping
- Geometric transforms

### 📅 Day 257 — Color + Thresholding 🔥
- HSV color space 🔥
- `cv2.inRange`
- Binary + Otsu + Adaptive thresholding

### 📅 Day 258 — Filtering + Edge Detection 🔥
- Gaussian blur, Median blur
- Bilateral filter
- Canny edge detection 🔥
- Sobel, Laplacian

### 📅 Day 259 — Morphological Operations
- Erosion, dilation
- Opening, closing
- Applications

### 📅 Day 260 — Contours + Shape Analysis 🔥
- `cv2.findContours`
- Bounding boxes
- Convex hull, shape moments

### 📅 Day 261 — Feature Detection ⭐🔥
- `SIFT` ⭐
- `ORB`, `FAST`
- Feature matching, homography

### 📅 Day 262 — Video Processing 🔥
- `cv2.VideoCapture`
- Frame reading loop
- Video writing, FPS handling

### 📅 Day 263 — Object Detection Basics 🔥
- Sliding window concept
- IoU 🔥
- NMS 🔥
- Anchor boxes concept

### 📅 Day 264 — YOLO ⭐🔥
- YOLO architecture 🔥
- YOLOv8 / YOLO11 ⭐🔥
- `ultralytics` library ⭐
- Running inference
- Custom training intro

### 📅 Day 265 — Image Segmentation 🔥
- Semantic vs instance segmentation
- U-Net architecture 🔥
- `torchvision` segmentation models ⭐
- Mask R-CNN concept ⭐

### 📅 Day 266 — Image Augmentation ⭐🔥
- `torchvision.transforms.v2` ⭐🔥
- `albumentations` ⭐🔥
- Augmentation strategies
- Cutmix, Mixup ⭐

### 📅 Day 267 — Vision Transformers (ViT) ⭐🔥
- ViT architecture 🔥🔥
- Patch embeddings 🔥
- ViT vs CNN comparison
- Swin Transformer ⭐

### 📅 Day 268 — Face Detection + OCR
- DNN face detector
- Face landmarks
- Tesseract + `pytesseract`
- Preprocessing for OCR

### 📅 Day 269 — Multimodal CV ⭐🔥
- CLIP ⭐🔥
- Zero-shot classification with CLIP ⭐
- BLIP concept ⭐

### 📅 Day 270 — Depth + 3D Vision ⭐
- Monocular depth estimation
- `DPT`, `ZoeDepth` ⭐
- Point clouds concept

### 📅 Day 271–275 — CV Projects

### 🛠️ PROJECT 14: Real-Time Object Detection
- YOLOv8/11 fine-tuned ⭐
- Live webcam inference
- OpenCV visualization
- `FastAPI` serving ⭐

### 🛠️ PROJECT 15: Image Segmentation Pipeline
- U-Net from scratch
- Custom dataset + augmentation
- Training pipeline
- Evaluation (IoU, Dice)

### 📅 Day 276–283 — CV Deep Practice
- 4 mini CV projects

### 📅 Day 284 🔁 — REVISION

---
---

# 🏆 PHASE 19 — TIMM DEEP (NEW) ⭐🔥 (Day 285–286)

---

### 📅 Day 285 — `timm` Model Zoo ⭐🔥
- What `timm` is — 700+ pretrained CV models ⭐
- Loading models with `timm.create_model` ⭐
- Feature extraction mode ⭐
- `timm` vs `torchvision.models` ⭐
- Model discovery + benchmarks

### 📅 Day 286 — `timm` Training Features ⭐🔥
- `timm` augmentation (`RandAugment`, `Mixup`, `CutMix`) ⭐
- `timm` schedulers + optimizers ⭐
- `timm` training scripts ⭐
- Fine-tuning with `timm` ⭐
- Using `timm` in custom training loops

---
---

# 📏 PHASE 20 — CV EVALUATION DEEP (NEW) 🔥 (Day 287–289)

---

### 📅 Day 287 — IoU + Dice Deep 🔥
- IoU (Intersection over Union) math 🔥
- GIoU, DIoU, CIoU ⭐
- Dice coefficient 🔥
- Dice loss implementation
- When to use each metric

### 📅 Day 288 — mAP Deep 🔥🔥
- Precision-Recall curve 🔥
- Average Precision (AP) 🔥
- mAP@50, mAP@50:95 🔥🔥
- COCO evaluation API ⭐
- Implementing AP from scratch

### 📅 Day 289 — Segmentation Metrics + Benchmarking
- Pixel accuracy
- Mean IoU (mIoU) 🔥
- Boundary F1 score
- COCO panoptic metrics ⭐
- Building evaluation pipeline

---
---

# 🎨 PHASE 21 — STABLE DIFFUSION DEEP (NEW) ⭐🔥 (Day 290–293)

---

### 📅 Day 290 — Diffusion Models Math ⭐🔥
- DDPM (Denoising Diffusion Probabilistic Models) 🔥
- Forward process (adding noise) 🔥
- Reverse process (denoising) 🔥
- Score matching concept
- U-Net as denoiser

### 📅 Day 291 — Stable Diffusion Architecture ⭐🔥
- Latent Diffusion Models 🔥
- VAE (Variational Autoencoder) role 🔥
- CLIP text encoder role 🔥
- U-Net denoiser
- Scheduler (DDIM, DPM++) ⭐

### 📅 Day 292 — `diffusers` Library Deep ⭐🔥
- `StableDiffusionPipeline` ⭐
- `AutoPipelineForText2Image` ⭐
- Schedulers ⭐
- ControlNet ⭐🔥
- LoRA for diffusion models ⭐🔥
- Inpainting, img2img ⭐

### 📅 Day 293 — Diffusion Fine-tuning ⭐🔥
- DreamBooth concept ⭐
- Textual Inversion ⭐
- LoRA fine-tuning for SD ⭐🔥
- `diffusers` training scripts ⭐
- Running on Colab ⭐

---
---

# 🎵 PHASE 22 — AUDIO + WHISPER (NEW) ⭐ (Day 294–296)

---

### 📅 Day 294 — Audio Fundamentals + `torchaudio` ⭐🔥
- Audio as waveforms (1D signals)
- `torchaudio.load`, `torchaudio.save` ⭐
- Sample rate, channels
- Spectrograms 🔥
- Mel spectrograms 🔥
- MFCC features 🔥
- `torchaudio.transforms` ⭐

### 📅 Day 295 — Audio Augmentation + Datasets ⭐
- Audio augmentation (noise, pitch, speed)
- `torchaudio.datasets` ⭐
- HuggingFace audio datasets ⭐
- Building audio `Dataset` + `DataLoader`

### 📅 Day 296 — Whisper + Speech Models ⭐🔥
- Whisper architecture ⭐🔥
- Running Whisper inference ⭐
- `faster-whisper` ⭐
- `wav2vec2` for speech ⭐
- HuggingFace `pipeline` for audio ⭐
- Speech-to-text in ML pipelines

---
---

# 💬 PHASE 23 — NLP + LLMS ⭐🔥 (Day 297–326)

---

### 📅 Day 297 — NLP Fundamentals 🔥
- Tokenization, text preprocessing
- N-grams, Bag of Words
- TF-IDF 🔥

### 📅 Day 298 — Word Embeddings 🔥
- Word2Vec concept 🔥
- GloVe, FastText
- `gensim` basics

### 📅 Day 299 — `spaCy` ⭐🔥
- spaCy v3 pipeline ⭐
- Tokenization, POS tagging
- NER, dependency parsing
- Custom pipelines ⭐

### 📅 Day 300 — Classical NLP Models
- Naive Bayes, Logistic Regression for text
- Scikit-learn text pipelines
- `TfidfVectorizer`

### 📅 Day 301 — Sequence Models 🔥
- RNN, LSTM, GRU for NLP
- Seq2Seq architecture 🔥
- Encoder-decoder for NLP

### 📅 Day 302 — Transformer for NLP 🔥🔥
- BERT architecture 🔥🔥
- `[CLS]`, `[SEP]`, `[MASK]` tokens
- Masked Language Modeling 🔥
- Positional embeddings in BERT

### 📅 Day 303 — HuggingFace `transformers` ⭐🔥🔥
- `AutoTokenizer` ⭐🔥
- `AutoModel`, `AutoModelFor*` ⭐
- `pipeline()` API ⭐🔥
- Model hub ⭐

### 📅 Day 304 — HuggingFace `datasets` ⭐🔥
- `load_dataset` ⭐
- `map`, `filter`, `select`
- Streaming datasets ⭐
- Arrow format ⭐🔥

### 📅 Day 305 — Fine-tuning with `Trainer` ⭐🔥
- `TrainingArguments` ⭐🔥
- `Trainer` API ⭐🔥
- Custom `compute_metrics`
- Callbacks ⭐
- `push_to_hub` ⭐

### 📅 Day 306 — Fine-tuning Manual Loop 🔥
- Custom training loop for NLP
- `attention_mask` 🔥
- Gradient accumulation 🔥

### 📅 Day 307 — PEFT + LoRA ⭐🔥🔥
- Parameter-efficient fine-tuning ⭐🔥
- LoRA ⭐🔥🔥
- QLoRA ⭐🔥
- `peft` library ⭐🔥

### 📅 Day 308 — LLM Basics ⭐🔥🔥
- GPT architecture 🔥
- Causal language modeling 🔥
- Autoregressive generation 🔥
- Temperature, top-k, top-p ⭐🔥

### 📅 Day 309 — Running LLMs Locally ⭐🔥
- `ollama` ⭐🔥
- `llama.cpp` ⭐
- Quantized models (GGUF, AWQ, GPTQ) ⭐🔥

### 📅 Day 310 — Prompt Engineering ⭐🔥
- Zero-shot, few-shot ⭐🔥
- Chain-of-thought (CoT) ⭐🔥
- System prompts ⭐
- Structured output prompting ⭐

### 📅 Day 311 — RAG Basics ⭐🔥🔥
- RAG concept ⭐🔥🔥
- Chunking strategies ⭐🔥
- Embedding models ⭐🔥
- Vector databases intro ⭐

### 📅 Day 312 — Vector Databases ⭐🔥
- `sentence-transformers` ⭐🔥
- `FAISS` ⭐🔥
- `chromadb` ⭐
- Cosine similarity 🔥

### 📅 Day 313 — LangChain ⭐🔥
- Chains, Agents ⭐🔥
- Tools, Memory ⭐
- LangChain vs LlamaIndex ⭐

### 📅 Day 314 — Tokenization Deep ⭐🔥
- BPE 🔥
- WordPiece, SentencePiece ⭐
- `tokenizers` library ⭐
- Training custom tokenizers ⭐

### 📅 Day 315 — Multimodal LLMs ⭐🔥🔥
- LLaVA ⭐🔥
- Vision-language tasks ⭐
- Image captioning, VQA ⭐

### 📅 Day 316 — `accelerate` ⭐🔥
- `accelerate` library ⭐🔥
- Multi-GPU training ⭐
- Gradient checkpointing ⭐🔥

### 📅 Day 317 — Agents + Tool Use ⭐🔥🔥
- LLM agents ⭐🔥
- Tool calling ⭐🔥
- ReAct pattern ⭐🔥

### 📅 Day 318–322 — NLP Projects

### 🛠️ PROJECT 16: Fine-tuned Text Classifier
- HuggingFace dataset ⭐
- BERT + LoRA fine-tuning ⭐🔥
- Full evaluation
- Push to HuggingFace Hub ⭐

### 🛠️ PROJECT 17: RAG Chatbot
- PDF ingestion → chunking → embeddings ⭐
- `chromadb` vector store ⭐
- LLM answering with citations ⭐
- `FastAPI` backend + Gradio frontend ⭐

### 📅 Day 323–325 — NLP Deep Practice

### 📅 Day 326 🔁 — REVISION

---
---

# 🔍 PHASE 24 — RETRIEVAL SYSTEMS DEEP (NEW) ⭐🔥 (Day 327–329)

---

### 📅 Day 327 — Sparse + Dense Retrieval 🔥
- BM25 — how it works 🔥
- `rank_bm25` library
- Dense retrieval (embedding-based) 🔥
- Sparse vs dense comparison
- When to use each

### 📅 Day 328 — Hybrid Search + Re-ranking ⭐🔥
- Hybrid search (BM25 + dense) ⭐🔥
- Reciprocal Rank Fusion (RRF) ⭐
- Cross-encoder re-rankers ⭐🔥
- `sentence-transformers` re-ranking ⭐
- Why re-ranking improves RAG quality

### 📅 Day 329 — Advanced RAG Patterns ⭐🔥
- Chunking strategies deep ⭐🔥
- Semantic chunking ⭐
- Hypothetical Document Embeddings (HyDE) ⭐
- Multi-query retrieval ⭐
- RAG evaluation (`RAGAS`) ⭐🔥

---
---

# 🎯 PHASE 25 — RLHF + DPO (NEW) ⭐🔥 (Day 330–333)

---

### 📅 Day 330 — RL Basics for LLMs 🔥
- Reward, policy, value concept 🔥
- Why RL is needed for LLMs 🔥
- PPO concept 🔥
- RLHF pipeline (SFT → Reward Model → PPO) 🔥
- How ChatGPT was trained

### 📅 Day 331 — RLHF Implementation ⭐🔥
- `trl` library ⭐🔥
- `SFTTrainer` ⭐🔥
- Reward model training ⭐
- `PPOTrainer` ⭐

### 📅 Day 332 — DPO ⭐🔥🔥
- DPO (Direct Preference Optimization) ⭐🔥🔥
- Why DPO replaced RLHF for many cases ⭐🔥
- `DPOTrainer` in `trl` ⭐🔥
- Preference datasets ⭐
- DPO vs PPO comparison ⭐

### 📅 Day 333 — Modern Alignment Techniques ⭐🔥
- ORPO ⭐🔥
- SimPO ⭐
- KTO ⭐
- When to use which ⭐
- Building alignment pipeline ⭐

---
---

# 📊 PHASE 26 — LLM EVALUATION (NEW) ⭐ (Day 334–335)

---

### 📅 Day 334 — LLM Benchmarks + Metrics ⭐🔥
- BLEU, ROUGE — when they're not enough
- Perplexity 🔥
- MMLU benchmark ⭐
- HellaSwag, ARC, TruthfulQA ⭐
- `evaluate` library ⭐

### 📅 Day 335 — Building Eval Pipelines ⭐🔥
- `lm-evaluation-harness` ⭐🔥
- Custom evaluation datasets ⭐
- LLM-as-judge pattern ⭐🔥
- `RAGAS` for RAG evaluation ⭐🔥
- Building your own eval suite ⭐

---
---

# ⚙️ PHASE 27 — ML ENGINEERING + DEPLOYMENT (Day 336–350)

---

### 📅 Day 336 — `FastAPI` ⭐🔥
- Building REST APIs ⭐🔥
- Pydantic models ⭐🔥
- Async endpoints ⭐
- File upload endpoints
- ML model API

### 📅 Day 337 — Model Serving ⭐🔥
- Serving PyTorch with FastAPI ⭐
- ONNX export + serving ⭐🔥
- Batch inference ⭐

### 📅 Day 338 — Docker for ML ⭐🔥
- Dockerfile for Python/ML ⭐
- `docker-compose`
- GPU in Docker ⭐
- ML API containers

### 📅 Day 339 — `Gradio` + `Streamlit` ⭐🔥
- `Gradio` ML demos ⭐🔥
- `Streamlit` data apps ⭐
- HuggingFace Spaces ⭐🔥

### 📅 Day 340 — MLflow ⭐🔥
- Experiment tracking ⭐🔥
- Model registry ⭐
- Artifact logging ⭐

### 📅 Day 341 — Model Optimization ⭐🔥
- Quantization (INT8, FP16) ⭐🔥
- `torch.quantization` ⭐
- Knowledge distillation ⭐🔥
- `bitsandbytes` ⭐🔥

### 📅 Day 342 — `Pydantic` v2 ⭐🔥
- Pydantic v2 changes ⭐🔥
- Data validation for ML ⭐
- Settings management ⭐

### 📅 Day 343 — Production ML Patterns 🔥
- Model monitoring ⭐
- Data drift detection ⭐
- A/B testing models
- Shadow deployment ⭐

### 📅 Day 344 — `vLLM` + LLM Serving ⭐🔥
- `vLLM` ⭐🔥 — fast LLM inference
- PagedAttention concept ⭐🔥
- Continuous batching ⭐
- `vLLM` API server ⭐
- vs `transformers` inference speed

### 📅 Day 345 — Cloud + GPU Workflow ⭐
- RunPod / vast.ai ⭐
- HuggingFace Hub as model store ⭐🔥
- AWS S3 for datasets ⭐
- Colab Pro for training ⭐

### 📅 Day 346 — Testing ML Systems 🔥
- Unit testing ML code
- Testing data pipelines
- `pytest` for ML ⭐

### 📅 Day 347 — Performance Optimization ⭐🔥
- `torch.compile` for inference ⭐🔥
- TensorRT intro ⭐
- Batching strategies ⭐

### 📅 Day 348 — ML System Design 🔥
- End-to-end ML system design
- Scalability considerations
- Latency vs throughput

### 📅 Day 349 — Security in ML ⭐
- Prompt injection ⭐🔥
- Model stealing attacks ⭐
- API security basics

### 📅 Day 350 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 18: Production ML API
- PyTorch model + FastAPI ⭐
- Docker containerized ⭐
- ONNX optimized ⭐
- `mlflow` tracking ⭐
- GitHub Actions CI ⭐
- HuggingFace Spaces demo ⭐

---
---

# 📄 PHASE 28 — PAPER READING + IMPLEMENTATION (NEW) 🔥 (Day 351–354)

---

### 📅 Day 351 — How to Read ML Papers 🔥
- Reading strategy (abstract → conclusion → methods) 🔥
- Understanding architecture diagrams
- Finding code implementations
- Papers With Code ⭐
- arXiv navigation
- Building a paper reading habit

### 📅 Day 352 — Implementing a CV Paper 🔥
- Pick a classic CV paper (ResNet / U-Net / ViT)
- Implement from scratch in PyTorch
- Compare with official implementation
- Write clear code comments

### 📅 Day 353 — Implementing an NLP Paper 🔥
- Pick a classic NLP paper (Attention is All You Need / BERT)
- Implement key components from scratch
- Understand every equation in the paper
- Run on small dataset

### 📅 Day 354 — Reading Modern Papers ⭐🔥
- Read 3 recent papers (2024/2025)
- One CV paper (YOLO11 / ViT variant)
- One NLP paper (LoRA / DPO / RAG improvement)
- One multimodal paper (LLaVA / CLIP variant)
- Write a summary for each

---
---

# 🏆 PHASE 29 — FINAL CAPSTONE PROJECTS (Day 355–360)

---

### 🛠️ PROJECT 19: End-to-End CV App (Day 355–356)
**Real-time Multi-task CV System**
- Object detection (YOLOv8/11) ⭐
- Image segmentation
- OCR on detected regions
- FastAPI backend + Gradio frontend
- Docker deployed
- Full OOP design
- `timm` backbone ⭐
- `einops` in model code ⭐
- mAP evaluation ⭐

### 🛠️ PROJECT 20: NLP + LLM App (Day 357–358)
**Multimodal RAG System**
- PDF + image ingestion ⭐
- Multimodal embeddings (CLIP) ⭐
- Vector database (ChromaDB) ⭐
- Hybrid search (BM25 + dense) ⭐
- LLM answering with citations ⭐
- LoRA fine-tuned model ⭐
- `RAGAS` evaluation ⭐
- Full web interface (Gradio)

### 🛠️ PROJECT 21: Complete ML Portfolio (Day 359–360)
**Polish + Publish Everything**
- All 20 projects on GitHub
- README + documentation for each
- HuggingFace model cards ⭐
- Demos on HuggingFace Spaces ⭐
- Personal ML portfolio site
- LinkedIn writeups

---
---

# 📚 DAILY STUDY PLAN

```
Hour 1  → Theory — read docs, take notes
Hour 2  → Code — implement from scratch
Hour 3  → Practice — solve problems, mini examples
Hour 4  → Project days — build actual project
```

---

# 🗺️ LEARNING RESOURCES

| Resource | Phase |
|---|---|
| Python docs (docs.python.org) | 1–5 |
| Real Python (realpython.com) | 1–5 |
| 3Blue1Brown — Essence of Linear Algebra | 6 |
| 3Blue1Brown — Neural Networks | 6 |
| Khan Academy — Probability + Statistics | 6 |
| NumPy docs | 10 |
| Pandas docs | 12 |
| Scikit-learn docs | 15 |
| PyTorch docs + tutorials | 16 |
| fast.ai ⭐ | 16–18 |
| Andrej Karpathy YouTube ⭐🔥 | 16, 23 |
| HuggingFace course ⭐🔥 | 23 |
| Papers With Code ⭐ | 18, 23, 28 |
| `diffusers` docs ⭐ | 21 |
| `trl` docs ⭐ | 25 |

---

# ⭐ THINGS THAT CHANGE MOST — WATCH THESE

1. **PyTorch 2.x** — `torch.compile`, mixed precision ⭐🔥
2. **HuggingFace ecosystem** — changes every few months ⭐🔥
3. **LLM landscape** — new models weekly ⭐🔥
4. **LoRA/PEFT/DPO** — evolving fast ⭐🔥
5. **Pandas CoW** — breaking change in 3.0 ⭐🔥
6. **NumPy 2.0** — breaking changes ⭐🔥
7. **Python 3.12/3.13** — new syntax, GIL removal ⭐🔥
8. **YOLO versions** — new versions frequently ⭐🔥
9. **RAG patterns** — evolving rapidly ⭐🔥
10. **Scikit-learn API** — metadata routing, set_output ⭐
11. **`diffusers`** — new models + pipelines constantly ⭐🔥
12. **`vLLM`** — rapidly improving ⭐🔥
13. **Alignment techniques** — DPO, ORPO, SimPO evolving ⭐🔥
14. **`einops`** — becoming standard in all papers ⭐
15. **`timm`** — new SOTA models added regularly ⭐

---

# ✅ END GOAL — After 360 Days You Can:

- Write production-grade Python with full internals knowledge
- Understand the math behind every ML algorithm
- Build and train CV models (detection, segmentation, classification)
- Fine-tune and deploy LLMs (LoRA, QLoRA, DPO, RAG, agents)
- Generate images with Stable Diffusion + fine-tune with LoRA
- Process audio with Whisper + torchaudio
- Deploy ML systems with FastAPI + Docker
- Read and implement research papers
- Apply for: ML Engineer / CV Engineer / NLP Engineer / LLM Engineer roles

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
- Decimal → Binary → Hexadecimal conversion
- Octal
- Why computers use binary (voltage levels)
- Two's complement — how negative numbers work 🔥
- Overflow, underflow

### 📅 Day 2 — Boolean Algebra 🔥
- AND, OR, NOT, NAND, NOR, XOR, XNOR
- Truth tables
- Boolean laws (De Morgan's, distributive, etc.)
- Simplifying boolean expressions
- Why this IS how transistors work 🔥

### 📅 Day 3 — Logic Gates 🔥
- Transistors → logic gates (conceptual)
- AND, OR, NOT gates physically
- NAND gate — universal gate 🔥
- Building any gate from NAND
- Gate delay concept

### 📅 Day 4 — Combinational Circuits
- Half adder, full adder 🔥
- Ripple carry adder
- Subtractor
- Multiplexer (MUX), Demultiplexer
- Encoder, Decoder
- Comparator

### 📅 Day 5 — Arithmetic Logic Unit (ALU) 🔥
- What the ALU does
- Building a simple ALU
- ALU operations (ADD, SUB, AND, OR, NOT, XOR, shift)
- Flags (zero, carry, overflow, sign) 🔥
- How Python's `+` operator reaches the ALU ⭐

### 📅 Day 6 — Sequential Circuits + Memory Elements
- Latches (SR latch, D latch)
- Flip-flops (D, JK, T) 🔥
- Registers — built from flip-flops 🔥
- Counters
- Clock signal — synchronizing everything 🔥

### 📅 Day 7 — Memory Basics
- SRAM vs DRAM concept
- How a RAM cell works
- Addressing memory
- Read/write cycles
- Why SRAM is faster but expensive

### 📅 Day 8 — How a CPU Executes Instructions 🔥
- Fetch → Decode → Execute → Write back cycle 🔥
- Program Counter (PC)
- Instruction Register (IR)
- Control Unit
- Simple CPU execution trace

### 📅 Day 9 — Instruction Set Architecture (ISA) 🔥
- What ISA is
- x86-64 basics 🔥
- ARM basics ⭐ (used in Apple Silicon, phones)
- RISC vs CISC 🔥
- Registers in x86-64 (RAX, RBX, RCX, RDX, RSP, RBP, RIP)
- Why ARM is used in ML accelerators ⭐🎮

### 📅 Day 10 — Assembly Language Basics 🔥
- Why learn assembly
- x86-64 assembly syntax (AT&T + Intel)
- `mov`, `add`, `sub`, `mul`, `div`
- `push`, `pop` — stack operations 🔥
- `jmp`, `je`, `jne` — control flow
- `call`, `ret` — function calls 🔥

### 📅 Day 11 — Assembly Deep 🔥
- Registers deep (general, segment, flags)
- Memory addressing modes
- Stack frame layout 🔥
- Function prologue/epilogue
- Calling conventions (cdecl, System V AMD64) 🔥
- How Python function calls look in assembly ⭐

### 📅 Day 12 — Floating Point Representation 🔥
- IEEE 754 standard 🔥
- Single precision (FP32) 🔥
- Double precision (FP64)
- Sign, exponent, mantissa
- Special values (NaN, Inf, -0)
- FP16, BF16 ⭐🎮 — why ML uses these
- Precision loss — why this matters in ML training ⭐🎮

### 📅 Day 13 — SIMD + Vectorization 🔥🎮
- SIMD concept (Single Instruction Multiple Data) 🔥
- SSE, AVX, AVX-512 instructions
- How NumPy uses SIMD ⭐🎮
- How PyTorch CPU ops use SIMD ⭐🎮
- Vectorization in compilers
- Why loops are slow, vectors are fast 🔥

### 📅 Day 14 — Digital Logic Practice
- Build adder circuit on paper
- Trace CPU fetch-decode-execute manually
- Read simple assembly programs
- Convert float to IEEE 754 manually

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

### 📅 Day 24 — Virtual Memory Intro 🔥
- Why virtual memory exists
- Physical vs virtual addresses 🔥
- Address space
- Pages + page size (4KB default)
- Page table concept
- Memory isolation between processes 🔥

### 📅 Day 25 — TLB + Page Tables 🔥
- TLB (Translation Lookaside Buffer) 🔥
- TLB hits vs misses
- Multi-level page tables (4-level in x86-64)
- Page table walk
- Huge pages (2MB, 1GB) ⭐🎮
- Why huge pages matter for ML training ⭐🎮

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

### 📅 Day 33 — Interrupts + Exceptions 🔥
- Hardware interrupts
- Software interrupts (syscalls) 🔥
- Interrupt Service Routines (ISR)
- Exception types (fault, trap, abort)
- Privilege levels (rings 0–3) 🔥
- Kernel mode vs user mode 🔥

### 📅 Day 34 — Architecture Practice
- Trace a matrix multiply through cache
- Calculate cache miss rate
- Analyze memory access patterns
- Measure IPC with `perf`

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

### 📅 Day 42 — Memory Allocation Internals 🔥
- `brk()`, `sbrk()` system calls
- `mmap()` for large allocations
- Buddy allocator
- Slab allocator
- Python's `pymalloc` ⭐
- How `gc` module interacts with OS memory ⭐

### 📅 Day 43 — Memory Mapped I/O
- Memory-mapped I/O concept
- Device registers in memory
- How GPU memory is mapped ⭐🎮
- `mmap` in Python ⭐
- File-backed memory mapping
- Anonymous memory mapping

### 📅 Day 44 — NUMA Memory 🔥🎮
- NUMA topology
- Local vs remote memory access
- NUMA nodes
- `numactl` tool
- NUMA-aware memory allocation
- Why NUMA matters for multi-GPU training ⭐🎮

### 📅 Day 45 — Memory Errors + Debugging
- Segmentation fault — what it really is 🔥
- Buffer overflow
- Use-after-free
- Memory leak detection
- `valgrind` intro
- Address Sanitizer (ASan)
- How Python protects you from most of these ⭐

### 📅 Day 46 — CPU Caches + ML Performance 🔥🎮
- Cache blocking (tiling) 🔥🎮
- Tiling matrix multiply 🔥🎮
- Why BLAS libraries are fast
- How NumPy/PyTorch use blocking ⭐🎮
- Prefetching — hardware vs software
- Cache-oblivious algorithms

### 📅 Day 47 — Memory Ordering + Concurrency 🔥
- Memory consistency models
- Sequential consistency
- x86 memory model (TSO)
- ARM memory model (weaker)
- `volatile` in C
- Memory barriers in Python threading ⭐

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

### 📅 Day 81 — What is an OS 🔥
- OS responsibilities
- Kernel vs user space 🔥
- System calls — the interface 🔥
- OS as resource manager
- Monolithic vs microkernel vs hybrid
- Linux kernel overview

### 📅 Day 82 — Boot Process 🔥
- Power on → BIOS/UEFI → bootloader → kernel
- BIOS vs UEFI
- GRUB bootloader
- Kernel initialization
- `init` / `systemd`
- What happens before your Python script runs ⭐

### 📅 Day 83 — System Calls 🔥
- What system calls are
- syscall interface (x86-64)
- Common syscalls (`read`, `write`, `open`, `close`, `fork`, `exec`, `exit`)
- `strace` — tracing system calls 🔥
- Syscall overhead
- How Python's `open()` becomes a syscall ⭐

### 📅 Day 84 — Processes 🔥
- Process concept
- Process Control Block (PCB)
- Process states (running, ready, blocked, zombie)
- `fork()` — creating processes 🔥
- `exec()` — replacing process image
- `wait()` — waiting for children
- Orphan + zombie processes

### 📅 Day 85 — Process Scheduling 🔥
- Why scheduling exists
- Scheduling criteria (CPU utilization, throughput, latency)
- Scheduling algorithms:
  - FCFS (First Come First Served)
  - SJF (Shortest Job First)
  - Round Robin 🔥
  - Priority scheduling
  - Multilevel feedback queue 🔥
- Linux CFS (Completely Fair Scheduler) 🔥

### 📅 Day 86 — Context Switching 🔥
- What context switching is
- Context switch cost 🔥
- Saving/restoring CPU state
- How often context switches happen
- Context switch overhead in Python ⭐
- Why async is better than threads for I/O ⭐

### 📅 Day 87 — Threads (OS Level) 🔥
- Process vs thread 🔥
- Kernel threads vs user threads
- Thread creation (`pthread_create`)
- Thread synchronization primitives
- Thread pool concept
- How Python threads map to OS threads ⭐

### 📅 Day 88 — Concurrency + Synchronization 🔥
- Race conditions 🔥
- Critical sections
- Mutex (mutual exclusion) 🔥
- Semaphores 🔥
- Condition variables
- Deadlock 🔥
- Deadlock conditions (Coffman conditions)
- Prevention, avoidance, detection

### 📅 Day 89 — Deadlock Deep 🔥
- Resource allocation graph
- Banker's algorithm
- Deadlock detection algorithms
- Recovery from deadlock
- Python threading deadlock examples ⭐

### 📅 Day 90 — Inter-Process Communication (IPC) 🔥
- Pipes (anonymous, named)
- Message queues
- Shared memory 🔥
- Signals
- Sockets (Unix domain)
- How Python `multiprocessing` uses IPC ⭐

### 📅 Day 91 — Signals 🔥
- What signals are
- Common signals (SIGINT, SIGTERM, SIGKILL, SIGSEGV)
- Signal handlers
- `signal` module in Python ⭐
- Handling Ctrl+C in Python programs ⭐
- ML training interruption handling ⭐🎮

### 📅 Day 92 — Memory Management (OS Intro)
- OS memory manager role
- Physical memory management
- Buddy system allocator
- Slab allocator
- `free`, `top`, `htop` commands

### 📅 Day 93 — Virtual Memory (OS Side) 🔥
- OS page table management
- Demand paging 🔥
- Page fault handling 🔥
- Swapping / swap space
- Out-of-memory (OOM) killer 🔥
- Why ML training OOMs ⭐🎮
- `vm.overcommit_memory` ⭐🎮

### 📅 Day 94 — File Systems (Intro)
- File system concept
- VFS (Virtual File System) layer
- Inodes 🔥
- Directory structure
- File permissions (Unix model) 🔥
- Hard links vs soft links

### 📅 Day 95 — OS Scheduling for ML 🔥🎮
- CPU affinity ⭐🎮
- `taskset` — binding processes to CPUs ⭐🎮
- `nice` + `ionice` — priority setting ⭐🎮
- Real-time scheduling for inference ⭐🎮
- `numactl` for NUMA-aware ML ⭐🎮
- Setting up ML training environment ⭐🎮

### 📅 Day 96 — Kernel Modules + Drivers
- What kernel modules are
- Loading/unloading modules (`insmod`, `rmmod`, `modprobe`)
- GPU drivers (NVIDIA) 🔥🎮
- CUDA driver vs runtime ⭐🎮
- Driver installation for ML ⭐🎮

### 📅 Day 97 — OS Virtualization
- Containers vs VMs 🔥
- Namespaces (pid, net, mnt, user) 🔥
- cgroups (resource limits) 🔥
- How Docker uses namespaces + cgroups ⭐🎮
- GPU passthrough in containers ⭐🎮
- Docker for ML ⭐🎮

### 📅 Day 98 — OS Security Basics
- Privilege levels
- Capabilities (Linux)
- `setuid`, `setgid`
- `chroot`
- SELinux, AppArmor concept
- Securing ML APIs ⭐🎮

### 📅 Day 99 🔁 — REVISION

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

### 📅 Day 169 — `tmux` + `screen` 🔥🎮
- `tmux` sessions, windows, panes ⭐🎮
- Detaching + reattaching ⭐🎮
- `tmux` for long ML training runs ⭐🎮
- `.tmux.conf` configuration
- `screen` as alternative
- Remote training workflow ⭐🎮

### 📅 Day 170 — SSH Deep 🔥🎮
- SSH key generation 🔥
- `~/.ssh/config` ⭐🎮
- SSH tunneling + port forwarding 🔥🎮
- `scp`, `rsync` — file transfer 🔥🎮
- SSH agent
- Connecting to GPU servers ⭐🎮

### 📅 Day 171 — Linux Performance Tools 🔥
- `top`, `htop`, `atop`
- `vmstat` — virtual memory stats
- `iostat` — I/O stats
- `sar` — system activity reporter
- `dstat`
- Monitoring ML training ⭐🎮

### 📅 Day 172 — `perf` Tool 🔥🎮
- `perf stat` — hardware counters 🔥🎮
- `perf top` — live profiling
- `perf record` + `perf report` 🔥🎮
- Flame graphs 🔥🎮
- CPU cycles, cache misses, branch mispredictions ⭐🎮
- Profiling Python + C extensions ⭐🎮

### 📅 Day 173 — System Configuration
- `sysctl` — kernel parameters 🔥
- Network tuning (`net.core.*`, `net.ipv4.*`)
- Memory tuning (`vm.*`)
- File descriptor limits (`ulimit`)
- Tuning for ML training ⭐🎮

### 📅 Day 174 — Linux Namespaces + cgroups 🔥🎮
- PID namespace
- Network namespace
- Mount namespace
- cgroups v1 vs v2 🔥🎮
- CPU + memory limits
- GPU cgroups (NVIDIA) ⭐🎮
- Container internals ⭐🎮

### 📅 Day 175 — Package Management
- `apt` (Debian/Ubuntu) 🔥
- `pip` interaction with system Python ⭐
- `conda` / `mamba` ⭐🎮
- CUDA toolkit installation ⭐🎮
- cuDNN installation ⭐🎮
- Managing ML environments ⭐🎮

### 📅 Day 176 — NVIDIA Tools on Linux 🔥🎮
- `nvidia-smi` deep ⭐🎮
- `nvidia-smi dmon` — monitoring ⭐🎮
- NVML (NVIDIA Management Library) ⭐🎮
- `nvtop` — GPU top ⭐🎮
- CUDA installation + verification ⭐🎮
- Driver vs CUDA toolkit versions ⭐🎮

### 📅 Day 177 — Disk + Storage Management
- `lsblk`, `fdisk`, `parted`
- LVM (Logical Volume Manager)
- RAID concepts
- `df`, `du`
- `mount`, `umount`
- Storage for ML datasets ⭐🎮

### 📅 Day 178 — Network Configuration
- `ip` command (modern) 🔥
- `ifconfig` (legacy)
- `nmcli`, `nmtui`
- Bonding + teaming (for InfiniBand) ⭐🎮
- Static IP setup for ML servers ⭐🎮

### 📅 Day 179 — `systemd` Deep 🔥
- Unit files
- Service, socket, timer units
- `systemctl` commands
- Journald logging
- Creating ML training services ⭐🎮
- Watchdog for long training runs ⭐🎮

### 📅 Day 180 — Linux Kernel Configuration
- `/boot/config-*` — kernel config
- Kernel modules
- Building custom kernel (concept)
- Kernel parameters at boot
- Disabling mitigations for performance ⭐🎮

### 📅 Day 181 — Docker on Linux 🔥🎮
- Docker architecture on Linux
- `containerd`, `runc`
- Docker + NVIDIA GPU (`nvidia-docker`) 🔥🎮
- `docker run --gpus all` ⭐🎮
- NVIDIA Container Toolkit ⭐🎮
- ML Docker images (NGC) ⭐🎮

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
- `Makefile` 🔥
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
- `perf` deep revisit
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
