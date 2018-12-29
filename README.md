# hugo-zero

The `hugo-zero` theme is intended for basic websites, blogging or a combination of both. This is different to most Hugo themes which focus solely on blogging. 
 
**NOTE:** The **basic website** mentioned above refer to websites with a single level of navigation/structure, such as a homepage, about page and so on **without** further sub-pages.

## Installation

In your Hugo site `themes` directory, run:

```
$ git clone https://github.com/TheYorkshireDev/hugo-zero.git
```

Next, open `config.toml` in the base of the Hugo site and ensure the theme option is set to `hugo-zero`:

```
theme = "hugo-zero"
```

For more information read the official [setup guide](https://gohugo.io/themes/installing-and-using-themes/) of Hugo.

## Basic Instructions

The `hugo-zero` theme has a few page templates which you should understand before using the theme. Since this theme is for Hugo you have your usual `list` and `single` pages for use with listing sub-pages and displaying indivdual posts. This is nothing new for Hugo themes and we haven't done anything fancy with these templates.

We have however added the `main` template, this is for the non-blogpost webpages such as a homepage or about page on a website using `hugo-zero`. A guide for which templates should be used on certain pages are below:

| Page           | URI Route     | Template | Explicit Declaration |
|----------------|---------------|----------|----------------------|
| Homepage       | `/`           | main     | Yes                  |
| About          | `/about`      | main     | Yes                  |
| Contact        | `/contact`    | main     | Yes                  |
| All Blog Posts | `/blog`       | list     | No                   |
| Blog Post 1    | `/blog/post1` | single   | No                   |
| Blog Post 2    | `/blog/post2` | single   | No                   |

For those pages such as a homepage or about page which should use the `main` template you need to add `layout: "main"` to the front matter of the said page.

## Configuration

### Config.toml example

```toml
baseurl = "/"
title = "Hugo Zero"
languageCode = "en-us"
theme = "hugo-zero"
```

### Front Matter example

```yaml
---
title: "Example article title"
date: "2018-10-22"
description: "Example article description"
---
```

### Settings

#### NavBar Links

To add items to the Navbar you must add `[[params.menu]]` items to the `config.toml`, for example to add About and Contact you would add:

```toml
[[params.menu]]
    name = "About"
    url  = "/about"

[[params.menu]]
    name = "Contact"
    url  = "/contact"
```

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/TheYorkshireDev/hugo-zero/issues) to let me know or make a contribution directly with a [pull request](https://github.com/TheYorkshireDev/hugo-zero/pulls).

## License

This theme is released under the [MIT license](LICENSE.md).
