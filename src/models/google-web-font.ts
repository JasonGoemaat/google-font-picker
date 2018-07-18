export class GoogleWebfont {
    /**
     * should be "webfonts#webfont"
     */
    kind: string;

    /**
     * Name to display and use in css, and use in link url for stylesheet
     * from google, but replace spaces with '+'
     */
    family: string;

    /**
     * Category of font, one of 'serif', 'sans-serif', 'display', 'handwriting', 'monospace'
     */
    category: string;

    /**
     * List of variants available.  Each one is a separate file.  You can use
     * this string as the key to the 'file' map to get the url for the actual
     * font file from fonts.gstatic.com.  'regular' should be there and is
     * the default, but you can have other names.  Commonly 'bold', 'italic',
     * or numbers for the weight like '500', '600', '700'.  Can really
     * be anything though, like '700italic'
     */
    variants: string[]; // normally 'regular', also bold, italic, 500,600,700,800, ...

    /**
     * Subsets of characters available.  Normal english would be 'latin' and maybe
     * 'latin-ext'.  Also cryillic, cryillic-ext, hebrew, greek, greek-ext, vietnamese,
     * and more including arabic and I'm sure chinese...
     */
    subsets: string[];

    /**
     * Version identifier, should change when updated.
     * i.e. 'v3'
     */
    version: string;

    /**
     * Date the font was last modified, i.e. '2017-10-10'
     */
    lastModified: string;

    /**
     * map of string from 'variants' array into url for the actual font file.
     * i.e. {"regular": "http://fonts.gstatic.com/s/abhayalibre/v3/e3tmeuGtX-Co5MNzeAOqinEgew.ttf"}
     */
    file: Map<string, string>;
}
