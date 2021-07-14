# toml-tool

Simple cli tool for reading and manipulating toml files.

## Usage

```
toml-tool [command]

Commands:
  toml-tool get <file> <path>
  toml-tool set <file> --category.foo="bar" --category.my.foo="bar"

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -w, --write    Write changes back to file                            [boolean]
```

### Exmaples

```
hello = "world"

[production]
hello = "foo"

[development]
hello = "bar"
```

#### Manipulating

```
./index.js set test.toml --hello=my --production.hello=cat
hello = "my"

[production]
hello = "cat"

[development]
hello = "bar"
```

*To write the changes into the file add the -w (write) flag*

#### Reading

```
./index.js get test.toml hello
world
```

```
./index.js get test.toml hello.production
foo
```

```
./index.js get test.toml hello.development
bar
```