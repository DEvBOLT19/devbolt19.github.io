# 🐍🤖 300-Day Python → ML Engineer Roadmap
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
| 6 | Math + DSA in Pure Python | 101–125 |
| 7 | NumPy ⭐ | 126–140 |
| 8 | Pandas ⭐ | 141–155 |
| 9 | Data Visualization | 156–163 |
| 10 | Scikit-learn + Classical ML | 164–185 |
| 11 | PyTorch ⭐🔥 | 186–220 |
| 12 | Computer Vision (OpenCV + PyTorch) ⭐ | 221–250 |
| 13 | NLP + LLMs ⭐🔥 | 251–280 |
| 14 | ML Engineering + Deployment | 281–295 |
| 15 | Final Capstone Projects | 296–300 |

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
- All string methods (`upper`, `lower`, `strip`, `split`, `join`, `replace`, `find`, `count`, etc.)
- f-strings (deep) ⭐
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
- `else` on loops (underused feature)
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
- LEGB rule (Local, Enclosing, Global, Built-in)
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
- Best practices for error handling

### 📅 Day 20 🔁 — REVISION + MINI PROJECT
- Revise Days 1–19 deeply
- Fix all weak areas

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
- `.pyc` files
- `__pycache__`
- `compile()`, `exec()`, `eval()`
- Code objects intro

### 📅 Day 23 — File Handling (Part 1)
- `open()` — all modes
- Text vs binary files
- `read()`, `readline()`, `readlines()`
- `write()`, `writelines()`
- `with` statement (context manager preview)

### 📅 Day 24 — File Handling (Part 2)
- `seek()`, `tell()`
- Buffering
- `io` module (`StringIO`, `BytesIO`)
- File encoding handling
- OS file interaction basics

### 📅 Day 25 — Filesystem (`os`, `pathlib`) ⭐
- `os.path` basics
- `pathlib.Path` (modern standard) ⭐🔥
- File/directory operations
- `shutil` — copy, move, delete
- `tempfile` — temp files/dirs
- Glob patterns

### 📅 Day 26 — `os`, `sys`, `subprocess`
- `os.environ` — environment variables
- `os.getcwd()`, `os.listdir()`
- `sys.argv`, `sys.exit`, `sys.path`
- `subprocess` — running shell commands
- `signal` module basics

### 📅 Day 27 — `collections` Module 🔥
- `Counter`
- `defaultdict`
- `OrderedDict`
- `deque` (double-ended queue)
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
- Lazy evaluation — why it matters
- `next()`, `StopIteration`
- Generator state

### 📅 Day 31 — Generators (Part 2) 🔥
- Generator expressions
- `.send()`, `.throw()`, `.close()` 🔥
- `yield from` ⭐
- Infinite generators
- Pipelines with generators

### 📅 Day 32 — Regex (`re`) 🔥
- Basic patterns (`\d`, `\w`, `\s`, `.`, `*`, `+`, `?`)
- Groups, named groups
- Lookahead, lookbehind
- `re.match`, `re.search`, `re.findall`, `re.sub`
- Compiled patterns
- Flags

### 📅 Day 33 — Serialization 🔥
- JSON (`json` module) deep
- `json.dumps`, `json.loads`, custom encoders
- Pickle — how it works + security risks 🔥
- `struct` — binary data packing
- `marshal` — bytecode serialization

### 📅 Day 34 — Date, Time, Math
- `datetime` — dates, times, timedelta
- `time` — timestamps, sleep
- `calendar`
- `math` module — all important functions
- `statistics` module
- `decimal` — precision handling 🔥
- Floating point behavior 🔥

### 📅 Day 35 — `random` + `secrets`
- `random` module deep
- `secrets` — cryptographically secure random ⭐
- `hashlib` — hashing (MD5, SHA256)
- `hmac` — message authentication
- Timing attacks + `hmac.compare_digest` 🔥

### 📅 Day 36 — CLI Tools
- `sys.argv` deep
- `argparse` — full usage 🔥
- Subcommands, types, defaults, help
- `configparser` — config files
- `tomllib` ⭐ — modern config (Python 3.11+)

### 📅 Day 37 — `urllib` (Pure Python HTTP)
- `urllib.request` — making HTTP requests
- `urllib.parse` — URL parsing
- `urllib.error` — error handling
- JSON APIs with urllib
- HTTP concepts (GET, POST, headers, status codes)

### 📅 Day 38 — `sqlite3` 🔥
- Connecting, creating tables
- CRUD operations
- Parameterized queries (SQL injection prevention)
- Transactions
- Row factories
- `executemany`, bulk inserts

### 📅 Day 39 — `enum`, `dataclasses` deep ⭐
- `enum.Enum`, `IntEnum`, `Flag`
- `dataclasses` — `@dataclass`
- `field()`, `__post_init__`
- Frozen dataclasses
- `dataclasses` vs `namedtuple` vs plain class

### 📅 Day 40 — `typing` Module ⭐🔥
- Basic annotations
- `List`, `Dict`, `Tuple`, `Optional`, `Union`
- `Any`, `Callable`
- `TypeVar`, generics ⭐
- `Protocol` ⭐🔥
- `Literal`, `Final`, `ClassVar`
- `ParamSpec`, `TypeVarTuple` ⭐
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
- `callable()`

### 📅 Day 43 — `logging` Module 🔥
- Logger, Handler, Formatter
- Log levels
- File + console handlers
- Structured logging ⭐
- `logging.config`
- Best practices

### 📅 Day 44 — `unittest` + `pytest` 🔥
- `unittest` — TestCase, assertions
- Mocking (`unittest.mock`) 🔥
- `pytest` basics ⭐
- Fixtures, parametrize
- Coverage intro
- TDD mindset

### 📅 Day 45 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 2: OOP Task Manager
- Full CRUD with `sqlite3`
- `dataclasses` for models
- `argparse` CLI interface
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
- `@classmethod` — `cls`
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
- MRO (Method Resolution Order) — C3 linearization 🔥
- Diamond problem
- `__mro__`
- Mixin pattern 🔥

### 📅 Day 51 — Polymorphism + Duck Typing 🔥
- Method overriding
- Operator overloading (`__add__`, `__mul__`, etc.)
- Duck typing philosophy
- `__call__` — callable objects
- `__init_subclass__` ⭐

### 📅 Day 52 — Encapsulation + Properties 🔥
- Public, protected, private (`_`, `__`)
- Name mangling
- `@property` 🔥
- `@setter`, `@deleter`
- `__slots__` — memory optimization 🔥

### 📅 Day 53 — Abstraction 🔥
- `abc` module
- `ABC`, `ABCMeta`
- `@abstractmethod`
- `@abstractproperty`
- Abstract class patterns
- Composition vs inheritance 🔥

### 📅 Day 54 — Descriptors 🔥
- What descriptors are
- Data vs non-data descriptors
- `__get__`, `__set__`, `__delete__`
- `__set_name__` ⭐🔥
- How `@property` works internally
- How `@classmethod` works internally

### 📅 Day 55 — Decorators (Part 1) 🔥
- Decorator basics — functions wrapping functions
- `@wraps` — preserving metadata
- Stacking decorators
- Decorators with arguments
- Class-based decorators 🔥

### 📅 Day 56 — Decorators (Part 2) 🔥
- `@property` as descriptor
- `@staticmethod`, `@classmethod` internals
- `@lru_cache`, `@cache` ⭐
- `@dataclass` internals
- Real-world decorator patterns

### 📅 Day 57 — Metaclasses 🔥
- What metaclasses are
- `type` — the metaclass of all classes
- Custom metaclass
- `__prepare__` 🔥
- `__build_class__` 🔥
- When to use metaclasses

### 📅 Day 58 — Object Model Deep 🔥
- `__getattr__` vs `__getattribute__` 🔥
- `__setattr__`, `__delattr__`
- `__dict__` vs `__slots__`
- `__del__` finalizers
- `__new__` deep
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
- `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- Relationships (ForeignKey concept)
- Query chaining API

---

### 📅 Day 61 — Advanced Iteration Patterns
- Custom iterators
- Infinite iterators
- Chaining iterables
- `itertools` combinations with generators
- Memory-efficient pipelines

### 📅 Day 62 — Advanced Generators 🔥
- Coroutines via generators
- `yield from` deep ⭐
- Generator-based state machines
- Pipelines
- `throw()` and `close()` patterns

### 📅 Day 63 — Advanced Closures + Scoping
- Cell variables deep
- Late binding in closures 🔥 (classic bug)
- `nonlocal` patterns
- Factory functions
- Partial application

### 📅 Day 64 — Advanced Type System ⭐🔥
- `Protocol` deep — structural subtyping
- `TypeVar` bounds + constraints
- Generic classes
- `overload` decorator
- `mypy` — running type checks
- `pyright` intro

### 📅 Day 65 — `__future__` + Compatibility ⭐
- `from __future__ import annotations`
- PEP 563 vs PEP 649 ⭐
- Python version differences
- `sys.version_info`
- Compatibility patterns

### 📅 Day 66 — Advanced `dataclasses` ⭐
- `__post_init__` patterns
- `InitVar`
- `KW_ONLY` ⭐
- `field(default_factory=)`
- Inheritance with dataclasses
- `dataclasses.replace()`

### 📅 Day 67 — Advanced Error Handling
- Exception groups ⭐ (Python 3.11+)
- `ExceptionGroup`, `except*` ⭐🔥
- `BaseExceptionGroup`
- Error handling strategies
- Retry patterns

### 📅 Day 68 — Advanced `collections` + Data Structures
- Implementing linked list
- Stack, queue from scratch
- Binary search tree
- Hash map from scratch 🔥
- `heapq` module

### 📅 Day 69 — `weakref` + Memory Patterns
- Weak references — why they exist
- `weakref.ref`, `WeakValueDictionary`
- Circular references
- `__del__` and garbage collection interaction
- Observer pattern with weakrefs

### 📅 Day 70 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 4: Design Patterns Showcase
- Implement 5 design patterns in one project
- Event system (Observer)
- Plugin system (Factory + Registry)
- Configuration system (Singleton + Strategy)
- Full type hints throughout
- `pytest` tests for all patterns

---

---

# 🧬 PHASE 4 — INTERNALS + CONCURRENCY (Day 71–90)

---

### 📅 Day 71 — Memory Management 🔥
- Reference counting deep
- `sys.getrefcount()`
- `ctypes.c_long.from_address(id(obj))`
- Object size (`sys.getsizeof`)
- Memory layout of Python objects

### 📅 Day 72 — Garbage Collection 🔥
- `gc` module deep
- Cyclic garbage collector
- Generations (0, 1, 2)
- `gc.collect()`, `gc.disable()`
- `tracemalloc` — memory profiling ⭐
- Finding memory leaks

### 📅 Day 73 — Python Object Model 🔥
- Everything is an object
- Type hierarchy
- `type(type)` is `type`
- Frame objects (`sys._getframe`) 🔥
- Code objects (`__code__`) 🔥
- Python startup sequence

### 📅 Day 74 — Bytecode + AST 🔥
- `dis` module — disassembling bytecode
- Reading bytecode output
- `ast` module — Abstract Syntax Trees
- `ast.parse()`, `ast.dump()`
- AST visitors
- `compile()` pipeline

### 📅 Day 75 — Import System Deep 🔥
- `importlib` deep
- Import hooks
- `sys.meta_path`
- `sys.path_hooks`
- Custom importers
- `importlib.util`

### 📅 Day 76 — GIL 🔥
- What GIL is and why it exists
- GIL impact on threading
- GIL and C extensions
- GIL removal in Python 3.13 ⭐🔥
- When GIL matters, when it doesn't

### 📅 Day 77 — Threading 🔥
- `threading.Thread`
- Locks, RLocks
- Semaphores, Events, Barriers
- `threading.local()`
- Race conditions 🔥
- Thread safety patterns
- `queue.Queue` — thread-safe communication

### 📅 Day 78 — Multiprocessing 🔥
- `multiprocessing.Process`
- `Pool`, `map`, `starmap`
- Shared memory ⭐
- `Manager`
- `Pipe`, `Queue`
- IPC patterns

### 📅 Day 79 — `concurrent.futures` ⭐🔥
- `ThreadPoolExecutor`
- `ProcessPoolExecutor`
- `Future` objects
- `as_completed`, `wait`
- Choosing threads vs processes
- Error handling in futures

### 📅 Day 80 — Async Python (Part 1) 🔥
- `async def`, `await`
- Coroutines vs threads
- `asyncio.run()` ⭐
- `asyncio.create_task()`
- `asyncio.gather()`
- Event loop basics

### 📅 Day 81 — Async Python (Part 2) ⭐🔥
- `asyncio.TaskGroup` ⭐ (Python 3.11+)
- Task cancellation
- `asyncio.timeout()` ⭐
- `asyncio.Queue`
- Async context managers
- Async generators ⭐
- Async iterators

### 📅 Day 82 — Async Python (Part 3) 🔥
- Event loop deep
- `asyncio` protocols + transports
- Low-level async networking
- `asyncio.StreamReader`, `StreamWriter`
- `asyncio` + `subprocess`

### 📅 Day 83 — Sockets 🔥
- TCP/IP basics
- `socket` module — raw networking
- TCP server + client
- UDP sockets
- Non-blocking sockets
- `select`, `poll`
- `ssl` module — secure sockets

### 📅 Day 84 — Profiling + Optimization 🔥
- `cProfile`, `profile`
- `pstats`
- `time` + `timeit`
- `tracemalloc` for memory
- `sys.getsizeof`
- Optimization strategies
- Time complexity awareness

### 📅 Day 85 — `ctypes` + C Interop
- `ctypes` — calling C libraries
- Data types in ctypes
- Structs in ctypes
- Why NumPy is fast (C under hood)
- Concept of Cython (no deep dive)

### 📅 Day 86 — Debugging 🔥
- `pdb` deep usage
- Breakpoints (`breakpoint()`) ⭐
- Stack traces
- `trace` module
- `faulthandler`
- Debugging async code

### 📅 Day 87 — `mmap` + Binary Data
- `mmap` — memory-mapped files
- `struct` deep — pack/unpack
- Binary file formats
- Reading `.pyc` files manually

### 📅 Day 88 — Python 3.12/3.13 New Features ⭐🔥
- Type parameter syntax (`type X = ...`) ⭐
- `@override` decorator ⭐
- `f-string` improvements ⭐
- GIL removal (3.13) ⭐
- `pathlib` improvements ⭐
- `tomllib` (3.11) ⭐
- `ExceptionGroup` (3.11) ⭐

### 📅 Day 89 — Reading Large Codebases
- How to navigate big projects
- Understanding `__init__.py` structure
- Reading CPython source (intro)
- Documentation reading strategy

### 📅 Day 90 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 5: Raw TCP Chat Application
- Pure `socket` + `threading`
- Multi-client server
- `asyncio` version (refactor)
- Message protocol design
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
- Resolving conflicts

### 📅 Day 92 — Git Advanced + GitHub
- Rebasing
- Stashing
- Tags, releases
- GitHub workflow
- Pull requests
- GitHub Actions basics ⭐

### 📅 Day 93 — Virtual Environments + `pip`
- `venv` deep
- `pip` — install, freeze, requirements
- `pip-tools` ⭐
- Environment isolation
- `.python-version`

### 📅 Day 94 — Modern Packaging ⭐🔥
- `pyproject.toml` (modern standard) ⭐🔥
- `poetry` — full usage ⭐
- `hatch` intro ⭐
- Building wheels
- Publishing to PyPI

### 📅 Day 95 — Code Quality Tools ⭐
- `black` — formatting ⭐
- `ruff` — linting ⭐🔥 (replaces flake8, isort, pylint)
- `mypy` — type checking ⭐
- `pre-commit` hooks ⭐
- `bandit` — security linting

### 📅 Day 96 — `pytest` Deep ⭐🔥
- Fixtures (scope, yield fixtures)
- `parametrize`
- Markers
- `monkeypatch`
- `tmp_path`
- Coverage (`pytest-cov`) ⭐
- Plugins

### 📅 Day 97 — Documentation
- Docstrings (Google, NumPy style) ⭐
- `sphinx` intro
- `mkdocs` intro
- README best practices
- Type hints as documentation

### 📅 Day 98 — CI/CD ⭐
- GitHub Actions for Python ⭐
- Running tests on push
- Linting in CI
- Coverage reports
- Docker basics for Python

### 📅 Day 99 — Project Structure Best Practices
- `src` layout vs flat layout ⭐
- `__init__.py` design
- Configuration management
- Environment variables (`python-dotenv`)
- Logging setup in projects

### 📅 Day 100 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 6: Professional Python Library
- Build a small reusable utility library
- Full `pyproject.toml`
- `pytest` tests with 90%+ coverage
- Type hints throughout
- `ruff` + `mypy` clean
- Published to TestPyPI
- GitHub Actions CI

---

---

# 📐 PHASE 6 — MATH + DSA IN PURE PYTHON (Day 101–125)

---

### 📅 Day 101 — Number Theory Basics
- Integers, floats, complex numbers in Python
- `math` module deep
- `cmath` for complex
- Floating point precision 🔥
- `decimal.Decimal` for precision
- `fractions.Fraction`

### 📅 Day 102 — Linear Algebra (Pure Python) 🔥
- Vectors as lists
- Matrix as list of lists
- Matrix addition, subtraction
- Scalar multiplication
- Dot product
- Matrix multiplication (manual) 🔥

### 📅 Day 103 — Linear Algebra (Part 2) 🔥
- Transpose
- Determinant
- Inverse matrix
- Identity matrix
- Why this matters for NumPy/PyTorch

### 📅 Day 104 — Statistics Basics 🔥
- Mean, median, mode
- Variance, standard deviation
- `statistics` module
- Normal distribution concept
- Correlation, covariance
- Why this matters for ML

### 📅 Day 105 — Probability Basics 🔥
- Probability concepts
- Conditional probability
- Bayes theorem
- Random variables
- Distributions (normal, uniform, binomial)
- Why this matters for ML

### 📅 Day 106 — Calculus Concepts (No Code)
- Derivatives — concept only
- Gradients — concept only
- Chain rule — concept only 🔥
- Why gradients matter in ML (backprop preview)

### 📅 Day 107 — Big O + Complexity 🔥
- Time complexity
- Space complexity
- O(1), O(n), O(n²), O(log n)
- Best/worst/average case
- Analyzing Python code complexity

### 📅 Day 108 — Arrays + Linked Lists
- Array internals
- Linked list (singly, doubly) from scratch
- Time complexity comparison
- When to use each

### 📅 Day 109 — Stacks + Queues
- Stack from scratch
- Queue from scratch
- Deque from scratch
- Applications (balanced brackets, BFS)

### 📅 Day 110 — Hash Maps + Sets from Scratch 🔥
- Hash function design
- Collision handling (chaining, open addressing)
- Building a HashMap class
- Why Python dict is O(1)

### 📅 Day 111 — Trees (Part 1)
- Binary tree
- BST (Binary Search Tree)
- Traversals (inorder, preorder, postorder)
- BFS, DFS

### 📅 Day 112 — Trees (Part 2)
- Heap from scratch
- `heapq` module
- Priority queue
- Applications

### 📅 Day 113 — Graphs
- Adjacency list, adjacency matrix
- BFS, DFS on graphs
- Shortest path (Dijkstra concept)
- Applications in ML (graph neural networks preview)

### 📅 Day 114 — Sorting Algorithms 🔥
- Bubble, selection, insertion
- Merge sort 🔥
- Quick sort 🔥
- Counting sort, radix sort
- Python's Timsort

### 📅 Day 115 — Searching + Two Pointers
- Binary search 🔥
- Linear search
- Two pointer technique
- Sliding window

### 📅 Day 116 — Recursion + Dynamic Programming
- Recursion patterns
- Memoization 🔥
- Tabulation
- Classic DP problems (fibonacci, knapsack)

### 📅 Day 117 — String Algorithms
- String matching
- KMP algorithm concept
- Trie data structure
- Why this matters for NLP

### 📅 Day 118 — Matrix Algorithms 🔥
- Matrix traversal
- Spiral order
- Rotate matrix
- Why this matters for CV

### 📅 Day 119 — Bit Manipulation
- Bit operations
- Common tricks
- XOR patterns
- Practical applications

### 📅 Day 120 🔁 — REVISION

### 📅 Day 121 — Pure Python ML Math
- Implementing gradient descent from scratch 🔥
- Linear regression from scratch
- Cost function, MSE

### 📅 Day 122 — Pure Python ML (Part 2)
- Logistic regression from scratch
- Sigmoid function
- Binary cross-entropy

### 📅 Day 123 — Pure Python Neural Network 🔥
- Single neuron from scratch
- Forward pass
- Backpropagation from scratch 🔥
- Weight updates

### 📅 Day 124 — Pure Python Neural Network (Part 2)
- Multi-layer network
- Activation functions (ReLU, sigmoid, tanh)
- Training loop
- Why NumPy/PyTorch are needed

### 📅 Day 125 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 7: Pure Python ML Library
- Linear regression
- Logistic regression
- Simple neural network
- No NumPy — pure Python math
- Full OOP design
- `pytest` tests

---

---

# 🔢 PHASE 7 — NUMPY ⭐ (Day 126–140)

> ⭐ NumPy 2.0 changed significantly — starred items reflect new behavior

---

### 📅 Day 126 — NumPy Basics ⭐
- Installing, importing
- `ndarray` — the core object
- Creating arrays (`array`, `zeros`, `ones`, `arange`, `linspace`)
- `dtype` ⭐ — data types
- `shape`, `ndim`, `size`

### 📅 Day 127 — NumPy Indexing + Slicing 🔥
- Basic indexing
- Slicing (views vs copies) 🔥
- Boolean indexing 🔥
- Fancy indexing
- `np.newaxis`
- Ellipsis (`...`)

### 📅 Day 128 — NumPy Operations 🔥
- Element-wise operations
- Broadcasting 🔥🔥
- Universal functions (ufuncs)
- `np.sum`, `np.mean`, `np.std`, `np.min`, `np.max`
- Axis parameter 🔥

### 📅 Day 129 — NumPy Linear Algebra 🔥
- `np.dot`, `np.matmul`, `@` operator
- `np.linalg.inv`, `np.linalg.det`
- `np.linalg.eig` (eigenvalues)
- `np.linalg.svd`
- `np.linalg.solve`

### 📅 Day 130 — NumPy Reshaping + Manipulation
- `reshape`, `ravel`, `flatten`
- `transpose`, `.T`
- `stack`, `hstack`, `vstack`, `concatenate`
- `split`, `hsplit`, `vsplit`
- `squeeze`, `expand_dims`

### 📅 Day 131 — NumPy Random ⭐🔥
- `np.random.Generator` ⭐ (new API)
- `rng = np.random.default_rng()` ⭐
- `rng.random()`, `rng.integers()`, `rng.normal()`
- Seeding properly ⭐
- Old `np.random.seed` vs new API 🔥

### 📅 Day 132 — NumPy Memory + Performance 🔥
- C-contiguous vs F-contiguous
- Views vs copies 🔥
- `np.ascontiguousarray`
- Memory layout and speed
- `np.frompyfunc` vs vectorize
- `numba` concept (preview)

### 📅 Day 133 — NumPy Advanced ⭐
- Structured arrays
- `np.where` 🔥
- `np.select`
- `np.clip`
- `np.unique`
- `np.argsort`, `np.argmax`, `np.argmin`
- `np.nan` handling ⭐

### 📅 Day 134 — NumPy 2.0 Changes ⭐🔥
- Breaking changes in NumPy 2.0 ⭐
- `copy` keyword changes ⭐
- `__array_function__` protocol
- `StringDType` ⭐
- Deprecated features removed ⭐

### 📅 Day 135 — NumPy for ML 🔥
- Implementing matrix operations
- Batch operations
- Vectorizing ML math
- Why NumPy ops are faster than loops 🔥

### 📅 Day 136 — NumPy File I/O
- `np.save`, `np.load`
- `np.savetxt`, `np.loadtxt`
- `.npy`, `.npz` formats
- Reading CSVs with NumPy

### 📅 Day 137 — NumPy + Images (Preview) 🔥
- Images as NumPy arrays
- RGB channels
- Pixel manipulation
- Resizing concept
- Normalization 🔥

### 📅 Day 138 — NumPy Masked Arrays + Polynomials
- Masked arrays (`np.ma`)
- `np.polyfit`, `np.poly1d`
- Numerical integration (`np.trapz`)

### 📅 Day 139 — NumPy Practice
- 20 problems mixing all NumPy concepts
- Focus on broadcasting, indexing, linalg

### 📅 Day 140 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 8: NumPy Image Processor
- Load images as NumPy arrays
- Implement filters (blur, sharpen, edge detect) manually
- Histogram equalization
- Channel manipulation
- No OpenCV yet — pure NumPy

---

---

# 🐼 PHASE 8 — PANDAS ⭐ (Day 141–155)

> ⭐ Pandas 2.0 + 3.0 changed significantly

---

### 📅 Day 141 — Pandas Basics ⭐
- `Series` and `DataFrame`
- Creating from dicts, lists, CSV
- `dtype` improvements ⭐
- `pd.ArrowDtype` ⭐ (Pandas 2.0)
- Basic inspection (`head`, `info`, `describe`)

### 📅 Day 142 — Pandas Indexing 🔥
- `loc` vs `iloc` 🔥
- Boolean indexing
- `at`, `iat` for single values
- MultiIndex
- Setting index

### 📅 Day 143 — Pandas Data Cleaning 🔥
- Handling missing data (`NaN`, `pd.NA`) ⭐
- `dropna`, `fillna`, `interpolate`
- Duplicates (`drop_duplicates`)
- Data type conversion
- `pd.NA` vs `np.nan` ⭐🔥

### 📅 Day 144 — Pandas Operations
- Arithmetic operations
- `apply`, `map` ⭐ (`applymap` deprecated) ⭐
- `transform`
- `assign`
- String operations (`.str`)

### 📅 Day 145 — Pandas GroupBy 🔥
- `groupby` deep
- Aggregation functions
- `agg` with multiple functions
- `transform` vs `agg`
- Named aggregations ⭐

### 📅 Day 146 — Pandas Merging + Joining 🔥
- `merge` (inner, outer, left, right)
- `join`
- `concat`
- `merge_asof` ⭐
- Key differences

### 📅 Day 147 — Pandas Reshaping
- `pivot`, `pivot_table`
- `melt`
- `stack`, `unstack`
- `crosstab`

### 📅 Day 148 — Pandas Time Series ⭐
- `DatetimeIndex`
- `resample`
- Rolling, expanding windows
- Time zone handling ⭐
- `pd.Timestamp`

### 📅 Day 149 — Pandas Performance ⭐🔥
- Copy-on-Write (CoW) ⭐🔥 (Pandas 2.0 default in 3.0)
- `inplace` deprecation ⭐
- Using `query` for speed
- `eval` for expressions
- Arrow backend ⭐

### 📅 Day 150 — Pandas I/O ⭐
- CSV (`read_csv`) — all params
- Excel (`read_excel`)
- JSON (`read_json`)
- Parquet ⭐🔥 (recommended format now)
- SQL with Pandas

### 📅 Day 151 — Pandas 2.x / 3.x Changes ⭐🔥
- Copy-on-Write full explanation ⭐🔥
- `DataFrame.map` replacing `applymap` ⭐
- Nullable dtypes ⭐
- `pd.options.future` flags ⭐
- Migration guide from 1.x ⭐

### 📅 Day 152 — Pandas + NumPy Integration 🔥
- `.to_numpy()` ⭐ (vs `.values`)
- `__array__` protocol
- Efficient conversion
- When to use each

### 📅 Day 153–154 — Pandas Practice
- EDA on real dataset
- Full data cleaning pipeline
- Feature engineering basics

### 📅 Day 155 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 9: End-to-End EDA + Feature Engineering
- Real dataset (e.g. Titanic, housing)
- Full cleaning pipeline
- Feature engineering
- Statistical analysis
- Export clean data for ML
- Full type hints, docstrings

---

---

# 📊 PHASE 9 — DATA VISUALIZATION (Day 156–163)

---

### 📅 Day 156 — Matplotlib Basics ⭐
- Figure, Axes model 🔥
- Line, scatter, bar, histogram
- Subplots
- Styling

### 📅 Day 157 — Matplotlib Advanced
- Annotations
- Custom ticks
- Twin axes
- 3D plots basics
- Saving figures

### 📅 Day 158 — Seaborn ⭐
- `seaborn` v0.13 changes ⭐
- Statistical plots
- `displot`, `relplot`, `catplot`
- Heatmaps 🔥
- Pair plots

### 📅 Day 159 — Plotly ⭐
- Interactive plots ⭐
- `plotly.express`
- 3D scatter, surface
- Why interactive matters for ML

### 📅 Day 160 — ML Visualizations 🔥
- Confusion matrix heatmap
- ROC curve
- Learning curves
- Feature importance plots
- t-SNE visualization preview

### 📅 Day 161 — Image Visualization
- Plotting images with matplotlib
- Plotting filters, kernels
- Grid of images
- Activation maps preview

### 📅 Day 162 — Data Visualization Best Practices
- Choosing right chart
- Color theory basics
- Avoiding misleading charts
- Telling a story with data

### 📅 Day 163 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 10: Full Data Story
- Dataset → Clean → Analyze → Visualize
- 10+ different chart types
- Interactive Plotly dashboard

---

---

# 🤖 PHASE 10 — SCIKIT-LEARN + CLASSICAL ML (Day 164–185)

---

### 📅 Day 164 — ML Fundamentals 🔥
- Supervised vs unsupervised
- Classification vs regression
- Training, validation, test split
- Overfitting, underfitting 🔥
- Bias-variance tradeoff 🔥

### 📅 Day 165 — Scikit-learn API ⭐🔥
- `fit`, `transform`, `predict`
- `Pipeline` 🔥
- `ColumnTransformer` ⭐
- `set_output(transform="pandas")` ⭐
- Estimator interface

### 📅 Day 166 — Data Preprocessing 🔥
- `StandardScaler`, `MinMaxScaler`
- `LabelEncoder`, `OneHotEncoder` ⭐
- `SimpleImputer`
- `PolynomialFeatures`
- Feature scaling importance

### 📅 Day 167 — Linear Models 🔥
- Linear Regression
- Logistic Regression
- Ridge, Lasso, ElasticNet
- Regularization deep 🔥

### 📅 Day 168 — Tree Models 🔥
- Decision Tree
- How trees split (Gini, entropy)
- Overfitting in trees
- `max_depth`, `min_samples`

### 📅 Day 169 — Ensemble Methods 🔥
- Random Forest 🔥
- Bagging concept
- Boosting concept
- `GradientBoostingClassifier`
- Feature importance

### 📅 Day 170 — XGBoost + LightGBM ⭐🔥
- XGBoost — how it differs ⭐
- LightGBM — why it's faster ⭐
- Hyperparameters to tune
- Early stopping ⭐

### 📅 Day 171 — SVM + KNN
- Support Vector Machine
- Kernel trick
- KNN — distance metrics
- When to use each

### 📅 Day 172 — Clustering 🔥
- K-Means
- DBSCAN
- Hierarchical clustering
- Evaluation (silhouette score)

### 📅 Day 173 — Dimensionality Reduction 🔥
- PCA — math intuition 🔥
- t-SNE 🔥
- UMAP ⭐
- When to use each

### 📅 Day 174 — Model Evaluation 🔥
- Accuracy, precision, recall, F1
- ROC-AUC 🔥
- Confusion matrix
- `classification_report`
- Regression metrics (MAE, MSE, R²)

### 📅 Day 175 — Cross Validation + Hyperparameter Tuning 🔥
- `KFold`, `StratifiedKFold`
- `GridSearchCV`, `RandomizedSearchCV`
- `HalvingGridSearchCV` ⭐
- `Optuna` intro ⭐

### 📅 Day 176 — Pipelines Deep ⭐🔥
- Full pipeline with preprocessing + model
- `FeatureUnion`
- Custom transformers
- `set_output` API ⭐

### 📅 Day 177 — Scikit-learn 1.x New Features ⭐
- `set_output` API ⭐
- `HalvingGridSearchCV` ⭐
- `HistGradientBoosting` improvements ⭐
- Metadata routing ⭐ (1.3+)

### 📅 Day 178 — Feature Engineering for ML 🔥
- Creating features
- Interaction terms
- Target encoding ⭐
- Feature selection (`SelectKBest`, `RFE`)

### 📅 Day 179 — Imbalanced Data ⭐
- Oversampling (SMOTE) ⭐
- Undersampling
- Class weights
- Evaluation on imbalanced data

### 📅 Day 180 — ML Project Workflow 🔥
- Problem framing
- Data collection strategy
- EDA → Feature engineering → Model → Evaluate → Deploy

### 📅 Day 181–184 — Classical ML Practice
- 2 full ML projects end-to-end

### 📅 Day 185 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 11: End-to-End Classical ML Pipeline
- Real dataset
- Full preprocessing pipeline
- Multiple models comparison
- Hyperparameter tuning
- Full evaluation report
- `mlflow` tracking intro ⭐

---

---

# 🔥 PHASE 11 — PYTORCH ⭐🔥 (Day 186–220)

> ⭐ PyTorch 2.x changed significantly — many starred items

---

### 📅 Day 186 — PyTorch Basics ⭐🔥
- Tensors — the core object
- Creating tensors
- `dtype`, `device` 🔥
- CPU vs GPU tensors
- `torch.tensor` vs `torch.Tensor` ⭐

### 📅 Day 187 — Tensor Operations 🔥
- Arithmetic, broadcasting
- `torch.matmul`, `@`
- Indexing, slicing
- `view`, `reshape` ⭐🔥
- `contiguous()` 🔥

### 📅 Day 188 — Autograd 🔥🔥
- `requires_grad=True`
- `.backward()` 🔥
- `.grad`
- Computation graph 🔥
- `torch.no_grad()` ⭐🔥
- `detach()` 🔥

### 📅 Day 189 — `nn.Module` 🔥🔥
- Building models with `nn.Module`
- `__init__` + `forward()`
- `parameters()`, `named_parameters()`
- `state_dict()`, `load_state_dict()` 🔥
- Model saving/loading ⭐

### 📅 Day 190 — Loss Functions + Optimizers 🔥
- `nn.MSELoss`, `nn.CrossEntropyLoss`, `nn.BCELoss`
- `torch.optim.SGD`, `Adam`, `AdamW` ⭐🔥
- Learning rate schedulers ⭐
- `optimizer.zero_grad()` 🔥
- Gradient clipping 🔥

### 📅 Day 191 — Training Loop 🔥🔥
- Full training loop pattern
- `model.train()`, `model.eval()` 🔥
- Validation loop
- Saving best model
- `torch.compile()` ⭐🔥 (PyTorch 2.0)

### 📅 Day 192 — Datasets + DataLoaders ⭐🔥
- `torch.utils.data.Dataset`
- Custom `Dataset` class 🔥
- `DataLoader` — batching, shuffling
- `num_workers`, `pin_memory` ⭐
- Transforms

### 📅 Day 193 — Neural Network Layers 🔥
- `nn.Linear`
- `nn.ReLU`, activation functions
- `nn.Dropout` ⭐
- `nn.BatchNorm1d`, `nn.LayerNorm` 🔥
- `nn.Sequential`

### 📅 Day 194 — Convolutional Layers 🔥🔥
- `nn.Conv2d` deep
- Kernels, stride, padding 🔥
- `nn.MaxPool2d`
- Feature maps
- Receptive field

### 📅 Day 195 — CNN Architecture 🔥
- Building a CNN from scratch
- LeNet architecture
- AlexNet concept
- VGG concept
- Skip connections concept

### 📅 Day 196 — Transfer Learning ⭐🔥
- `torchvision.models` ⭐
- Pretrained models (ResNet, EfficientNet, ViT) ⭐
- Freezing layers 🔥
- Fine-tuning 🔥
- Feature extraction

### 📅 Day 197 — `torch.compile` + PyTorch 2.x ⭐🔥
- `torch.compile()` ⭐🔥 — graph compilation
- `torch.compile` modes ⭐
- `torch.amp` (mixed precision) ⭐🔥
- `torch.autocast` ⭐
- Performance improvements in 2.x ⭐

### 📅 Day 198 — RNN + LSTM + GRU 🔥
- Recurrent networks concept
- `nn.RNN`, `nn.LSTM`, `nn.GRU`
- Hidden state, cell state 🔥
- Sequence modeling
- Bidirectional RNNs

### 📅 Day 199 — Attention Mechanism 🔥🔥
- Self-attention deep 🔥🔥
- Query, Key, Value 🔥
- Scaled dot-product attention
- Multi-head attention 🔥
- Why attention replaced RNNs

### 📅 Day 200 — Transformer Architecture 🔥🔥
- Encoder-decoder structure 🔥
- Positional encoding 🔥
- Feed-forward layers
- Layer normalization 🔥
- Building transformer from scratch

### 📅 Day 201 — PyTorch GPU + CUDA ⭐🔥
- `.to(device)` pattern
- `torch.cuda.is_available()`
- Moving data to GPU 🔥
- GPU memory management ⭐
- `torch.cuda.empty_cache()` ⭐

### 📅 Day 202 — Mixed Precision Training ⭐🔥
- `torch.amp.autocast` ⭐
- `GradScaler` ⭐
- Why FP16/BF16 matters ⭐🔥
- Memory savings
- Speed improvements

### 📅 Day 203 — Model Checkpointing + Experiment Tracking ⭐
- Saving/loading checkpoints
- `mlflow` ⭐
- `wandb` ⭐🔥
- Logging metrics, params, artifacts

### 📅 Day 204 — Regularization Techniques 🔥
- L1, L2 regularization
- Dropout patterns
- `BatchNorm` as regularizer
- Data augmentation as regularization
- Early stopping

### 📅 Day 205 — Custom Loss Functions + Layers 🔥
- Writing custom `nn.Module` layers
- Custom loss functions
- `torch.autograd.Function` 🔥
- Gradient hooks

### 📅 Day 206 — `torchvision` ⭐🔥
- `torchvision.transforms` v2 ⭐🔥
- `torchvision.datasets`
- `torchvision.models` ⭐
- `torchvision.ops` (NMS, RoI, etc.) ⭐

### 📅 Day 207 — `torchaudio` intro (for NLP/multimodal)
- Audio as tensors
- Spectrograms
- MFCC features
- Why audio matters for modern NLP

### 📅 Day 208 — Distributed Training Concept ⭐
- `DataParallel` vs `DistributedDataParallel` ⭐
- `torch.distributed` intro
- Multi-GPU concept
- When you need it

### 📅 Day 209 — PyTorch Profiler ⭐
- `torch.profiler` ⭐
- Finding bottlenecks
- Memory profiling
- Optimizing training loops

### 📅 Day 210 🔁 — REVISION

### 📅 Day 211–215 — Deep Learning Theory 🔥
- Backpropagation math (deep) 🔥
- Vanishing/exploding gradients 🔥
- Weight initialization (Xavier, He) 🔥
- Optimizers comparison (SGD, Adam, AdamW) 🔥
- Learning rate scheduling strategies 🔥

### 📅 Day 216–219 — PyTorch Practice
- Build and train 3 models from scratch

### 📅 Day 220 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 12: Image Classifier (OOP PyTorch)
- Custom `Dataset` + `DataLoader`
- CNN architecture (custom)
- Transfer learning (ResNet fine-tune)
- Training loop with mixed precision ⭐
- `wandb` experiment tracking ⭐
- Full evaluation + visualization

---

---

# 👁️ PHASE 12 — COMPUTER VISION (Day 221–250)

---

### 📅 Day 221 — OpenCV Basics ⭐
- Installing, `cv2` intro
- Reading, displaying, saving images
- Color spaces (BGR vs RGB) 🔥
- `cv2.cvtColor`
- Image properties

### 📅 Day 222 — OpenCV Image Operations
- Resizing, cropping, rotating
- Flipping
- `cv2.resize`
- Geometric transforms

### 📅 Day 223 — Color + Thresholding 🔥
- HSV color space 🔥
- `cv2.inRange` — color masking
- Binary thresholding
- Otsu's thresholding
- Adaptive thresholding

### 📅 Day 224 — Filtering + Edge Detection 🔥
- Gaussian blur
- Median blur
- Bilateral filter
- Canny edge detection 🔥
- Sobel, Laplacian

### 📅 Day 225 — Morphological Operations
- Erosion, dilation
- Opening, closing
- Morphological gradient
- Applications

### 📅 Day 226 — Contours + Shape Analysis 🔥
- `cv2.findContours`
- `cv2.drawContours`
- Bounding boxes
- Convex hull
- Shape moments

### 📅 Day 227 — Feature Detection ⭐🔥
- `SIFT` ⭐ (now free)
- `ORB`
- `FAST`
- Feature matching
- Homography

### 📅 Day 228 — Video Processing 🔥
- `cv2.VideoCapture`
- Frame reading loop
- Video writing
- FPS handling
- Webcam input

### 📅 Day 229 — Object Detection Basics 🔥
- Sliding window concept
- IoU (Intersection over Union) 🔥
- NMS (Non-Maximum Suppression) 🔥
- Anchor boxes concept

### 📅 Day 230 — YOLO ⭐🔥
- YOLO architecture concept 🔥
- YOLOv8 / YOLO11 ⭐🔥
- `ultralytics` library ⭐
- Running inference
- Custom training intro

### 📅 Day 231 — Image Segmentation 🔥
- Semantic vs instance segmentation
- U-Net architecture 🔥
- `torchvision` segmentation models ⭐
- Mask R-CNN concept ⭐

### 📅 Day 232 — Face Detection + Recognition
- `cv2` Haar cascades
- DNN face detector
- Face landmarks
- `deepface` concept ⭐

### 📅 Day 233 — OCR + Document Analysis
- Tesseract + `pytesseract`
- Preprocessing for OCR
- Document layout analysis concept
- DocTR ⭐

### 📅 Day 234 — Image Augmentation ⭐🔥
- `torchvision.transforms.v2` ⭐🔥
- `albumentations` ⭐🔥
- Augmentation strategies for CV
- Cutmix, Mixup ⭐

### 📅 Day 235 — Vision Transformers (ViT) ⭐🔥
- ViT architecture 🔥🔥
- Patch embeddings 🔥
- `timm` library ⭐🔥
- ViT vs CNN comparison
- Swin Transformer ⭐

### 📅 Day 236 — Diffusion Models Intro ⭐🔥
- Stable Diffusion concept ⭐
- `diffusers` library ⭐🔥
- DDPM basics
- Running inference

### 📅 Day 237 — Multimodal Models ⭐🔥
- CLIP ⭐🔥 — vision + language
- `openai/clip` usage ⭐
- Zero-shot classification with CLIP ⭐
- BLIP, LLaVA concept ⭐

### 📅 Day 238 — Depth Estimation + 3D Vision ⭐
- Monocular depth estimation
- `DPT`, `ZoeDepth` ⭐
- Point clouds concept
- NeRF concept ⭐

### 📅 Day 239 — CV Model Deployment Prep 🔥
- ONNX export ⭐🔥
- TorchScript ⭐
- Model quantization ⭐
- OpenVINO concept ⭐

### 📅 Day 240–244 — CV Projects

### 🛠️ PROJECT 13: Real-Time Object Detection
- YOLOv8/11 fine-tuned on custom data ⭐
- Live webcam inference
- OpenCV for visualization
- `FastAPI` serving ⭐

### 🛠️ PROJECT 14: Image Segmentation Pipeline
- U-Net from scratch in PyTorch
- Custom dataset + augmentation
- Full training pipeline
- Evaluation (IoU, Dice score)

### 📅 Day 245–249 — CV Deep Practice
- 3 mini CV projects

### 📅 Day 250 🔁 — REVISION

---

---

# 💬 PHASE 13 — NLP + LLMs ⭐🔥 (Day 251–280)

> This field changes fastest — ALL items here are subject to rapid change

---

### 📅 Day 251 — NLP Fundamentals 🔥
- Tokenization
- Text preprocessing
- Vocabulary, corpus
- N-grams
- Bag of Words
- TF-IDF 🔥

### 📅 Day 252 — Word Embeddings 🔥
- Word2Vec concept 🔥
- GloVe concept
- FastText
- Why embeddings work
- `gensim` basics

### 📅 Day 253 — `spaCy` ⭐🔥
- spaCy v3 pipeline ⭐
- Tokenization, POS tagging
- NER (Named Entity Recognition)
- Dependency parsing
- Custom pipelines ⭐

### 📅 Day 254 — `NLTK` + Text Processing
- Stemming, lemmatization
- Stop words
- Frequency distributions
- `NLTK` vs `spaCy` ⭐

### 📅 Day 255 — Classical NLP Models
- Naive Bayes for text
- Logistic regression for NLP
- SVM for text
- Scikit-learn text pipelines
- `TfidfVectorizer`

### 📅 Day 256 — Sequence Models for NLP 🔥
- RNN for NLP
- LSTM for text
- Seq2Seq architecture 🔥
- Encoder-decoder for NLP

### 📅 Day 257 — Transformer for NLP 🔥🔥
- BERT architecture 🔥🔥
- `[CLS]`, `[SEP]`, `[MASK]` tokens
- Masked Language Modeling 🔥
- Next Sentence Prediction
- Positional embeddings in BERT

### 📅 Day 258 — HuggingFace `transformers` ⭐🔥🔥
- `AutoTokenizer` ⭐🔥
- `AutoModel`, `AutoModelForSequenceClassification` ⭐
- `pipeline()` API ⭐🔥
- Model hub ⭐
- Loading models ⭐

### 📅 Day 259 — HuggingFace `datasets` ⭐🔥
- `load_dataset` ⭐
- Dataset operations
- `map`, `filter`, `select`
- Streaming datasets ⭐
- Arrow format ⭐🔥

### 📅 Day 260 — Fine-tuning with `Trainer` ⭐🔥
- `TrainingArguments` ⭐🔥
- `Trainer` API ⭐🔥
- Custom `compute_metrics`
- Callbacks ⭐
- `push_to_hub` ⭐

### 📅 Day 261 — Fine-tuning with PyTorch (Manual) 🔥
- Custom training loop for NLP
- Tokenization pipeline
- Batching variable-length sequences
- `attention_mask` 🔥
- Gradient accumulation 🔥

### 📅 Day 262 — PEFT + LoRA ⭐🔥🔥
- Parameter-efficient fine-tuning ⭐🔥
- LoRA ⭐🔥🔥 — Low-Rank Adaptation
- QLoRA ⭐🔥
- `peft` library ⭐🔥
- When to use LoRA vs full fine-tune ⭐

### 📅 Day 263 — LLM Basics ⭐🔥🔥
- GPT architecture 🔥
- Causal language modeling 🔥
- Autoregressive generation 🔥
- Temperature, top-k, top-p ⭐🔥
- Sampling strategies ⭐

### 📅 Day 264 — Running LLMs Locally ⭐🔥
- `ollama` ⭐🔥
- `llama.cpp` ⭐
- `transformers` for LLM inference ⭐
- Quantized models (GGUF, AWQ, GPTQ) ⭐🔥
- Memory requirements ⭐

### 📅 Day 265 — Prompt Engineering ⭐🔥
- Zero-shot, few-shot prompting ⭐🔥
- Chain-of-thought (CoT) ⭐🔥
- System prompts ⭐
- Structured output prompting ⭐
- Prompt templates ⭐

### 📅 Day 266 — RAG (Retrieval Augmented Generation) ⭐🔥🔥
- RAG concept ⭐🔥🔥
- Vector databases (`chromadb`, `faiss`) ⭐🔥
- Embeddings for retrieval ⭐🔥
- `langchain` intro ⭐
- `llama-index` intro ⭐

### 📅 Day 267 — Vector Databases + Embeddings ⭐🔥
- `sentence-transformers` ⭐🔥
- Embedding models ⭐
- Cosine similarity 🔥
- `FAISS` ⭐🔥
- `chromadb` ⭐

### 📅 Day 268 — LangChain ⭐🔥
- Chains ⭐
- Agents ⭐🔥
- Tools ⭐
- Memory ⭐
- LangChain vs LlamaIndex ⭐

### 📅 Day 269 — LLM Fine-tuning ⭐🔥🔥
- Full fine-tuning vs LoRA ⭐🔥
- Instruction tuning ⭐🔥
- `trl` library ⭐🔥
- `SFTTrainer` ⭐🔥
- DPO (Direct Preference Optimization) ⭐🔥

### 📅 Day 270 — Evaluation for NLP/LLMs ⭐🔥
- BLEU, ROUGE scores
- Perplexity 🔥
- `evaluate` library ⭐
- LLM evaluation frameworks ⭐
- `lm-evaluation-harness` ⭐

### 📅 Day 271 — Multimodal LLMs ⭐🔥🔥
- LLaVA ⭐🔥
- GPT-4V concept ⭐
- Gemini concept ⭐
- Vision-language tasks ⭐
- Image captioning, VQA ⭐

### 📅 Day 272 — Tokenization Deep ⭐🔥
- BPE (Byte Pair Encoding) 🔥
- WordPiece
- SentencePiece ⭐
- `tokenizers` library ⭐
- Training custom tokenizers ⭐

### 📅 Day 273 — `accelerate` + Distributed NLP ⭐🔥
- `accelerate` library ⭐🔥
- Multi-GPU training ⭐
- `deepspeed` intro ⭐
- Gradient checkpointing ⭐🔥

### 📅 Day 274 — Agents + Tool Use ⭐🔥🔥
- LLM agents concept ⭐🔥
- Tool calling ⭐🔥
- ReAct pattern ⭐🔥
- OpenAI function calling ⭐
- Anthropic tool use ⭐

### 📅 Day 275–279 — NLP Projects

### 🛠️ PROJECT 15: Fine-tuned Text Classifier
- HuggingFace dataset ⭐
- BERT fine-tuning with LoRA ⭐🔥
- Custom `Trainer` ⭐
- Full evaluation
- Push to HuggingFace Hub ⭐

### 🛠️ PROJECT 16: RAG Chatbot
- PDF ingestion → chunking → embeddings ⭐
- `chromadb` vector store ⭐
- LLM answer generation ⭐
- `FastAPI` backend ⭐
- Gradio frontend ⭐

### 📅 Day 280 🔁 — REVISION

---

---

# ⚙️ PHASE 14 — ML ENGINEERING + DEPLOYMENT (Day 281–295)

---

### 📅 Day 281 — `FastAPI` ⭐🔥
- Building REST APIs with FastAPI ⭐🔥
- Pydantic models ⭐🔥
- Async endpoints ⭐
- File upload endpoints
- API for ML models

### 📅 Day 282 — Model Serving ⭐🔥
- Serving PyTorch models with FastAPI ⭐
- ONNX export + serving ⭐🔥
- `torchserve` intro ⭐
- Batch inference ⭐

### 📅 Day 283 — Docker for ML ⭐🔥
- Docker basics ⭐
- Dockerfile for Python/ML ⭐
- `docker-compose`
- GPU in Docker ⭐
- Building ML API containers

### 📅 Day 284 — `Gradio` + `Streamlit` ⭐🔥
- `Gradio` — ML demos ⭐🔥
- `Streamlit` — data apps ⭐
- Deploying on HuggingFace Spaces ⭐🔥
- Building model demos

### 📅 Day 285 — MLflow ⭐🔥
- Experiment tracking ⭐🔥
- Model registry ⭐
- Artifact logging ⭐
- Model versioning ⭐

### 📅 Day 286 — Data Versioning + DVC ⭐
- `dvc` — Data Version Control ⭐
- Tracking datasets ⭐
- Pipeline reproducibility ⭐

### 📅 Day 287 — Model Optimization ⭐🔥
- Quantization (INT8, FP16) ⭐🔥
- `torch.quantization` ⭐
- Pruning ⭐
- Knowledge distillation ⭐🔥
- `bitsandbytes` ⭐🔥

### 📅 Day 288 — Cloud ML Basics ⭐
- AWS/GCP/Azure ML concepts
- HuggingFace Hub as model store ⭐🔥
- Google Colab Pro tips ⭐
- RunPod, vast.ai for GPU ⭐

### 📅 Day 289 — `Pydantic` v2 ⭐🔥
- Pydantic v2 changes ⭐🔥
- Data validation for ML pipelines ⭐
- Settings management ⭐
- Model configs with Pydantic ⭐

### 📅 Day 290 — Production ML Patterns 🔥
- Feature stores concept ⭐
- Model monitoring ⭐
- Data drift detection ⭐
- A/B testing models
- Shadow deployment ⭐

### 📅 Day 291 — Testing ML Systems 🔥
- Unit testing ML code
- Testing data pipelines
- Model behavior tests
- `pytest` for ML ⭐
- `great_expectations` intro ⭐

### 📅 Day 292 — Performance Optimization ⭐🔥
- `torch.compile` for inference ⭐🔥
- `vLLM` for LLM serving ⭐🔥
- TensorRT intro ⭐
- Batching strategies ⭐

### 📅 Day 293 — Security in ML Systems ⭐
- Prompt injection ⭐🔥
- Model stealing attacks ⭐
- Data poisoning ⭐
- API security basics
- Rate limiting

### 📅 Day 294 — ML System Design 🔥
- Designing end-to-end ML systems
- Scalability considerations
- Latency vs throughput
- Real-world architecture patterns

### 📅 Day 295 🔁 — REVISION + PROJECT

### 🛠️ PROJECT 17: Production ML API
- PyTorch model + FastAPI ⭐
- Docker containerized ⭐
- ONNX optimized ⭐
- `mlflow` tracking ⭐
- GitHub Actions CI ⭐
- HuggingFace Spaces demo ⭐

---

---

# 🏆 PHASE 15 — FINAL CAPSTONE PROJECTS (Day 296–300)

---

### 🛠️ PROJECT 18: End-to-End Computer Vision App (Day 296–297)
**Real-time Multi-task CV System**
- Object detection (YOLOv8/11) ⭐
- Image segmentation
- OCR on detected regions
- FastAPI backend + Gradio frontend
- Docker deployed
- Full OOP design

### 🛠️ PROJECT 19: NLP + LLM Application (Day 298–299)
**Multimodal RAG System**
- PDF + image ingestion ⭐
- Multimodal embeddings (CLIP) ⭐
- Vector database (ChromaDB) ⭐
- LLM answering with citations ⭐
- LoRA fine-tuned model ⭐
- Full web interface

### 🛠️ PROJECT 20: Complete ML Portfolio (Day 300)
**Polish + Publish Everything**
- All projects on GitHub
- README + documentation for each
- HuggingFace model cards ⭐
- Demo on HuggingFace Spaces ⭐
- Personal ML portfolio site
- LinkedIn/blog writeups

---

---

# 📚 WHAT TO DO EVERY DAY

```
Hour 1: Study the theory — read docs, take notes
Hour 2: Code the concept — implement from scratch
Hour 3: Practice — solve problems, build mini examples
Hour 4: (On project days) — build the actual project
```

---

# 🗺️ LEARNING RESOURCES (All Free)

| Resource | Use For |
|---|---|
| Python docs (docs.python.org) | Phase 1–5 |
| Real Python (realpython.com) | Phase 1–5 |
| CS50P | Phase 1–2 |
| NumPy docs | Phase 7 |
| Pandas docs | Phase 8 |
| Scikit-learn docs | Phase 10 |
| PyTorch docs + tutorials | Phase 11 |
| HuggingFace course (huggingface.co/learn) ⭐ | Phase 13 |
| fast.ai ⭐ | Phase 11–12 |
| Andrej Karpathy's YouTube ⭐🔥 | Phase 11, 13 |
| Papers With Code ⭐ | Phase 12–13 |

---

# ⭐ THINGS THAT CHANGE MOST (Watch These)

1. **PyTorch 2.x** — `torch.compile`, mixed precision ⭐🔥
2. **HuggingFace ecosystem** — changes every few months ⭐🔥
3. **LLM landscape** — new models weekly ⭐🔥
4. **LoRA/PEFT techniques** — evolving fast ⭐🔥
5. **Pandas CoW** — breaking change in 3.0 ⭐🔥
6. **NumPy 2.0** — breaking changes ⭐🔥
7. **Python 3.12/3.13** — new syntax, GIL removal ⭐🔥
8. **YOLO versions** — new versions frequently ⭐🔥
9. **RAG patterns** — evolving rapidly ⭐🔥
10. **Scikit-learn API** — metadata routing, set_output ⭐

---

# ✅ END GOAL

After 300 days you will be able to:
- Write production-grade Python with full internals knowledge
- Build and train CV models (detection, segmentation, classification)
- Fine-tune and deploy LLMs (LoRA, RAG, agents)
- Deploy ML systems with FastAPI + Docker
- Contribute to open source ML projects
- Apply for ML Engineer / CV Engineer / NLP Engineer roles
