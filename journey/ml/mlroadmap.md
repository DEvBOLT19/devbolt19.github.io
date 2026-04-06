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

## date 6 april 2026
## roadmap day 4
## i am on day 5
---
---

# 🧱 PHASE 1 — CORE PYTHON FOUNDATION (Day 1–20)
### 🎯 Goal: Build rock-solid base with zero confusion later

---
 
### 📅 Day 1 — How Python Works (completed) 🟢
- How the interpreter runs your code ✅
- Bytecode overview (`.pyc`) ✅
- REPL vs scripts✅
- Variables, dynamic typing✅
- `print`, `input` basics✅
- typecasting ✅

### 📅 Day 2 — Data Types + Memory 🟢
- `int`, `float`, `bool`, `str`✅
- `id()`, `type()`, `isinstance()`✅
- Memory references✅
- Mutability intro✅
- Integer caching (`-5` to `256`) 🔥✅
- String interning 🔥✅

### 📅 Day 3 — Operators 🔥🟢
- Arithmetic, logical, comparison✅
- Bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`)✅
- `is` vs `==` — identity vs equality✅
- Walrus operator (`:=`) ⭐✅
- Operator precedence✅

### 📅 Day 4 — Strings (Part 1)🟢
- String creation, indexing, slicing✅
- Immutability — why and how✅
- `len`, `in`, `not in`✅
- String concatenation + repetition✅
- Raw strings, escape characters✅

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
