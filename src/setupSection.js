import Section from "./components/section.js";

const items = [
    {
        "section": "Basic Tags",
        "items": [
            {
                "tag": "<html></html>",
                "description": "Creates an HTML document"
            },
            {
                "tag": "<head></head>",
                "description": "Sets off the title & other info that isn't displayed"
            },
            {
                "tag": "<body></body>",
                "description": "Sets off the visible portion of the document"
            },
            {
                "tag": "<title></title>",
                "description": "Puts name of the document in the title bar; when bookmarking pages, this is what is bookmarked"
            }
        ]
    },
    {
        "section": "Body Attributes",
        "items": [
            {
                "tag": "<body bgcolor=?>",
                "description": "Sets background color, using name or hex value"
            },
            {
                "tag": "<body text=?>",
                "description": "Sets text color, using name or hex value"
            },
            {
                "tag": "<body link=?>",
                "description": "Sets color of links, using name or hex value"
            },
            {
                "tag": "<body vlink=?>",
                "description": "Sets color of visited links, using name or hex value"
            },
            {
                "tag": "<body alink=?>",
                "description": "Sets color of active links (while mouse-clicking)"
            }
        ]
    },
    {
        "section": "Text Tags",
        "items": [
            {
                "tag": "<pre></pre>",
                "description": "Creates preformatted text"
            },
            {
                "tag": "<h1></h1> - <h6></h6>",
                "description": "Creates headlines — H1=largest, H6=smallest"
            },
            {
                "tag": "<b></b>",
                "description": "Creates bold text (should use <strong> instead)"
            },
            {
                "tag": "<i></i>",
                "description": "Creates italicized text (should use <em> instead)"
            },
            {
                "tag": "<tt></tt>",
                "description": "Creates typewriter-style text"
            },
            {
                "tag": "<code></code>",
                "description": "Used to define source code, usually monospace"
            },
            {
                "tag": "<cite></cite>",
                "description": "Creates a citation, usually processed in italics"
            },
            {
                "tag": "<address></address>",
                "description": "Creates address section, usually processed in italics"
            },
            {
                "tag": "<em></em>",
                "description": "Emphasizes a word (usually processed in italics)"
            },
            {
                "tag": "<strong></strong>",
                "description": "Emphasizes a word (usually processed in bold)"
            },
            {
                "tag": "<font size=?></font>",
                "description": "Sets size of font - 1 to 7 (should use CSS instead)"
            },
            {
                "tag": "<font color=?></font>",
                "description": "Sets font color (should use CSS instead)"
            },
            {
                "tag": "<font face=?></font>",
                "description": "Defines the font used (should use CSS instead)"
            }
        ]
    },
    {
        "section": "Links",
        "items": [
            {
                "tag": "<a href='URL'>clickable text</a>",
                "description": "Creates a hyperlink to a URL"
            },
            {
                "tag": "<a href='mailto:EMAIL_ADDRESS'>clickable text</a>",
                "description": "Creates a hyperlink to an email address"
            },
            {
                "tag": "<a name='NAME'>",
                "description": "Creates a target location within a document"
            },
            {
                "tag": "<a href='#NAME'>clickable text</a>",
                "description": "Creates a link to that target location"
            }
        ]
    },
    {
        "section": "Formatting",
        "items": [
            {
                "tag": "<p></p>",
                "description": "Creates a new paragraph"
            },
            {
                "tag": "<br>",
                "description": "Inserts a line break (carriage return)"
            },
            {
                "tag": "<blockquote></blockquote>",
                "description": "Puts content in a quote - indents text from both sides"
            },
            {
                "tag": "<div></div>",
                "description": "Used to format block content with CSS"
            },
            {
                "tag": "<span></span>",
                "description": "Used to format inline content with CSS"
            }
        ]
    },
    {
        "section": "Lists",
        "items": [
            {
                "tag": "<ul></ul>",
                "description": "Creates an unordered list"
            },
            {
                "tag": "<ol start=?></ol>",
                "description": "Creates an ordered list (start=xx, where xx is a counting number)"
            },
            {
                "tag": "<li></li>",
                "description": "Encompasses each list item"
            },
            {
                "tag": "<dl></dl>",
                "description": "Creates a definition list"
            },
            {
                "tag": "<dt>",
                "description": "Precedes each definition term"
            },
            {
                "tag": "<dd>",
                "description": "Precedes each definition"
            }
        ]
    },
    {
        "section": "Graphical Elements",
        "items": [
            {
                "tag": "<hr>",
                "description": "Inserts a horizontal rule"
            },
            {
                "tag": "<hr size=?>",
                "description": "Sets size (height) of horizontal rule"
            },
            {
                "tag": "<hr width=?>",
                "description": "Sets width of rule (as a % or absolute pixel length)"
            },
            {
                "tag": "<hr noshade>",
                "description": "Creates a horizontal rule without a shadow"
            },
            {
                "tag": "<img src='URL' />",
                "description": "Adds image; it is a separate file located at the URL"
            },
            {
                "tag": "<img src='URL' align=?>",
                "description": "Aligns image left/right/center/bottom/top/middle (use CSS)"
            },
            {
                "tag": "<img src='URL' border=?>",
                "description": "Sets size of border surrounding image (use CSS)"
            },
            {
                "tag": "<img src='URL' height=?>",
                "description": "Sets height of image, in pixels"
            },
            {
                "tag": "<img src='URL' width=?>",
                "description": "Sets width of image, in pixels"
            },
            {
                "tag": "<img src='URL' alt=?>",
                "description": "Sets the alternate text for browsers that can't process images (required by the ADA)"
            }
        ]
    },
    {
        "section": "Forms",
        "items": [
            {
                "tag": "<form></form>",
                "description": "Defines a form"
            },
            {
                "tag": "<select multiple name=? size=?></select>",
                "description": "Creates a scrolling menu. Size sets the number of menu items visible before user needs to scroll."
            },
            {
                "tag": "<select name=?></select>",
                "description": "Creates a pulldown menu"
            },
            {
                "tag": "<option>",
                "description": "Sets off each menu item"
            },
            {
                "tag": "<textarea name=? cols='x' rows='y'></textarea>",
                "description": "Creates a text box area. Columns set the width; rows set the height."
            },
            {
                "tag": "<input type='checkbox' name=? value=?>",
                "description": "Creates a checkbox."
            },
            {
                "tag": "<input type='checkbox' name=? value=? checked>",
                "description": "Creates a checkbox which is pre-checked."
            },
            {
                "tag": "<input type='radio' name=? value=?>",
                "description": "Creates a radio button."
            },
            {
                "tag": "<input type='radio' name=? value=? checked>",
                "description": "Creates a radio button which is pre-checked."
            },
            {
                "tag": "<input type='text' name=? size=?>",
                "description": "Creates a one-line text area."
            },
            {
                "tag": "<input type='submit' value=?>",
                "description": "Creates a submit button."
            },
            {
                "tag": "<input type='image' name=? src=? border=? alt=?>",
                "description": "Creates a submit button using an image."
            },
            {
                "tag": "<input type='reset'>",
                "description": "Creates a reset button"
            }
        ]
    },
    {
        "section": "Tables",
        "items": [
            {
                "tag": "<table></table>",
                "description": "Creates a table"
            },
            {
                "tag": "<tr></tr>",
                "description": "Sets off each row in a table"
            },
            {
                "tag": "<td></td>",
                "description": "Sets off each cell in a row"
            },
            {
                "tag": "<th></th>",
                "description": "Sets off the table header (a normal cell with bold, centered text)"
            },
            {
                "tag": "<table border=?>",
                "description": "Sets the width of the border around table cells"
            },
            {
                "tag": "<table cellspacing=?>",
                "description": "Sets amount of space between table cells"
            },
            {
                "tag": "<table cellpadding=?>",
                "description": "Sets amount of space between a cell's border and its contents"
            },
            {
                "tag": "<table width=?>",
                "description": "Sets width of the table in pixels or as a percentage"
            },
            {
                "tag": "<tr align=?>",
                "description": "Sets alignment for cells within the row (left/center/right)"
            },
            {
                "tag": "<td align=?>",
                "description": "Sets alignment for cells (left/center/right)"
            },
            {
                "tag": "<tr valign=?>",
                "description": "Sets vertical alignment for cells within the row (top/middle/bottom)"
            },
            {
                "tag": "<td valign=?>",
                "description": "Sets vertical alignment for cell (top/middle/bottom)"
            },
            {
                "tag": "<td rowspan=?>",
                "description": "Sets number of rows a cell should span (default=1)"
            },
            {
                "tag": "<td colspan=?>",
                "description": "Sets number of columns a cell should span"
            },
            {
                "tag": "<td nowrap>",
                "description": "Prevents lines within a cell from being broken to fit"
            }
        ]
    },
    {
        "section": "HTML5 Input Tag Attributes",
        "items": [
            {
                "tag": "<input type='email' name=?>",
                "description": "Sets a single-line textbox for email addresses"
            },
            {
                "tag": "<input type='url' name=?>",
                "description": "Sets a single-line textbox for URLs"
            },
            {
                "tag": "<input type='number' name=?>",
                "description": "Sets a single-line textbox for a number"
            },
            {
                "tag": "<input type='range' name=?>",
                "description": "Sets a single-line text box for a range of numbers"
            },
            {
                "tag": "<input type='date/month/week/time' name=?>",
                "description": "Sets a single-line text box with a calendar showing the date/month/week/time"
            },
            {
                "tag": "<input type='search' name=?>",
                "description": "Sets a single-line text box for searching"
            },
            {
                "tag": "<input type='color' name=?>",
                "description": "Sets a single-line text box for picking a color"
            }
        ]
    }
];
for (const item of items) {
    const mySection = new Section(item, document.querySelector("#app").querySelector("main"));
    mySection.create()
}