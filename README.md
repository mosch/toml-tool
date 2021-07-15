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

### Using with yarn / npm

You can use this tool in your script with npm & yarn like so:

```
yarn toml-tool set myconfig.toml ...
yarn toml-tool get myconfig.toml myvalue
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
toml-tool set test.toml --hello=my --production.hello=cat
hello = "my"

[production]
hello = "cat"

[development]
hello = "bar"
```

*To write the changes into the file add the -w (write) flag*

#### Reading

```
toml-tool get test.toml hello
world
```

```
toml-tool get test.toml hello.production
foo
```

```
toml-tool get test.toml hello.development
bar
```
