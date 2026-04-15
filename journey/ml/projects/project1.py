class InvalidOperatorError(Exception):
    pass
    
class Calculator:
    def __init__(self):
        self.operator = {
            "+": lambda x,y: x+y,
            "-": lambda x,y: x-y,
            "/": lambda x,y: x/y,
            "**":lambda x,y: x**y,
            "%": lambda x,y: x%y
        }
    def calculate(self, x, op, y):
        if op not in self.operator:
            raise InvalidOperatorError(f"{op!r} is not valid. use {", ".join(self.operator)}")
        return self.operator[op](x,y)
        
class History:
    def __init__(self):
        self.entries = []

    def add(self, expression, result):
        if isinstance(result, float) and result.is_integer():
            result_str = str(int(result))
        else:
            result_str = str(round(result, 8))
        self.entries.append(f"{expression} = {result_str}")

    def show(self):
        if not self.entries:
            print("  No history yet.")
            return
        print()
        for i, entry in enumerate(self.entries, start=1):
            print(f"  {i}. {entry}")
        print()

    def last_result(self):
        if not self.entries:
            return None
        last = self.entries[-1]
        return float(last.split(" = ")[-1])


class Memory:
    def __init__(self):
        self.value = None

    def store(self, val):
        self.value = val
        print(f"  [M] Stored: {val}")

    def recall(self):
        return self.value

    def clear(self):
        self.value = None
        print("  [M] Cleared.")
        
def parse_input(raw, memory, history):
    text = raw.strip()

    # Replace 'ans' with last result
    if "ans" in text.lower():
        last = history.last_result()
        if last is None:
            raise ValueError("No previous answer. Do a calculation first.")
        text = text.lower().replace("ans", str(last))

    # Replace 'mr' with memory value
    if "mr" in text.lower():
        mem = memory.recall()
        if mem is None:
            raise ValueError("Memory is empty. Use 'ms' to store a value.")
        text = text.lower().replace("mr", str(mem))

    # Split and validate
    parts = text.split()
    if len(parts) != 3:
        raise ValueError(f"Format: number operator number  (e.g. 5 + 3)\nGot: '{raw.strip()}'")

    try:
        a = float(parts[0])
    except ValueError:
        raise ValueError(f"'{parts[0]}' is not a number.")

    try:
        b = float(parts[2])
    except ValueError:
        raise ValueError(f"'{parts[2]}' is not a number.")

    op = parts[1]
    return a, op, b
    
def run():
    calc    = Calculator()
    history = History()
    memory  = Memory()

    print("Calculator ready. Type 'help' for commands.\n")

    while True:
        mem_tag = f"[M:{memory.value}] " if memory.value is not None else ""
        try:
            raw = input(f"calc {mem_tag}> ")
        except KeyboardInterrupt:
            print("\nBye!")
            break

        command = raw.strip().lower()
        if not command:
            continue

        if command in ("quit", "exit"):
            print(f"Done. {len(history.entries)} calculations. Bye!")
            break

        elif command == "history":
            history.show()

        elif command == "clear history":
            history.entries.clear()
            print("  History cleared.")

        elif command == "ms":
            last = history.last_result()
            if last is None:
                print("  Nothing to store yet.")
            else:
                memory.store(last)

        elif command == "mr":
            val = memory.recall()
            print(f"  Memory: {val}" if val is not None else "  Memory is empty.")

        elif command == "mc":
            memory.clear()

        elif command == "help":
            print("""
  Commands:
    5 + 3       any math (spaces required around operator)
    ans + 10    use last result
    mr * 2      use memory value
    ms          store last result to memory
    mr          show memory
    mc          clear memory
    history     show all calculations
    clear history
    quit
""")

        else:
            try:
                a, op, b = parse_input(raw, memory, history)
                result = calc.calculate(a, op, b)

                display = int(result) if isinstance(result, float) and result.is_integer() else round(result, 8)
                print(f"  = {display}")

                a_s = str(int(a)) if a.is_integer() else str(a)
                b_s = str(int(b)) if b.is_integer() else str(b)
                history.add(f"{a_s} {op} {b_s}", result)

            except ValueError as e:
                print(f"  Input error: {e}")
            except InvalidOperatorError as e:
                print(f"  Bad operator: {e}")
            except ZeroDivisionError:
                print("  Can't divide by zero.")
            except Exception as e:
                print(f"  Error: {e}")
                
if __name__ == "__main__":
    run()
