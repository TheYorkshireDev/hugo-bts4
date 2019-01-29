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

#### Code Syntax Highlighting

If you are going to use code syntax highlighting within the theme it is recommeded to set `pygmentsUseClasses`. The syntax styling was developed with this flag set to true hence there could be unforeseen style issues otherwise.

```toml
pygmentsUseClasses=true
```

#### Site Author

We should define the website author in the `config.toml` file, that way we can set the `author` meta data in the header.

```toml
[author]
    name = "Bob Smith"
```

#### Accent Color

When on the website using a mobile device Chrome, Opera and Firefox OS allow you to choose the colour of the browser theme. You can read more about it [here](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/#meta_theme_color_for_chrome_and_opera).

To specify what color the theme should become we can set `[params.color]` in in the `config.toml` file.

```toml
[params.color]
    accent = "#38bb6c"
```

#### NavBar Logo

The NavBar on your website can display either the site title or a logo. By default the site title will be used but if you specify a logo in the `config.toml` that will be displayed instead.

```toml
[params]
    navbarLogo = "http://placehold.it/150x50?text=Hugo-Zero"
    navbarLogoAlt = "Logo for Hugo Zero test website"
```

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

#### GitHub Links

If the posts are hosted on GitHub (or any other site) you can specify the path to the file allowing others to contribute. Note the path should not include a file, that will be appended automatically.

```toml
[params.github_contribution]
    link = "https://github.com/path-to-file/"
```

#### Footer Links

The footer is split into three sections; `info`, `social`, `quicklinks`.

All items on the footer are detailed under `[params.footer]` within the `config.toml`.

The `info` section is designed to detail the website author, an example is below:
```toml
[params.footer]
    info = "© Bill Smith"
```

The `social` section displays social media icons which will link to the relevant websites/accounts. The first attribute specifies the font awesome icon classes and the second attribute is the url to the external website, an example is below:
```toml
[params.footer]
    [[params.footer.social]]
      icon = "fab fa-twitter"
      link = "https://twitter.com"

    [[params.footer.social]]
      icon = "fab fa-instagram"
      link = "https://www.instagram.com"

    [[params.footer.social]]
        icon = "fas fa-envelope"
        link = "mailto:blah@gmail.com"
```

The `quicklinks` section displays a list of links which will be displayed on the footer, an example of adding two links is:
```toml
[params.footer]
    [[params.footer.quicklinks]]
      text = "Legal Notice"
      link = "/legal"

    [[params.footer.quicklinks]]
      text = "Credits"
      link = "/credits"
```

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/TheYorkshireDev/hugo-zero/issues) to let me know or make a contribution directly with a [pull request](https://github.com/TheYorkshireDev/hugo-zero/pulls).

## License

This theme is released under the [MIT license](LICENSE.md).
