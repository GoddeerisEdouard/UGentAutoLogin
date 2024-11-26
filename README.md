# Updates and Downloads

This branch will contain the updated files for every platform.  
These files will be published here and hosted on GitHub Pages.  
Extensions use these Github URLs to check for new versions of the extension.

# Releasing an update
What to do with these files when releasing an update of this extension

## Chrome
The [update.xml](./platform/chrome/update.xml) can only contain the latest version.  
So just update the `codebase` (.crx) link & `version` (X.X.X) attributes.

## Firefox
The [updates.json](./platform/firefox/updates.json) can contain all versions, even the previous ones.  
So add an extra element in the `updates` list in this format:
```json
{
    "version": "X.X.X",
    "update_link": "...xpi"
}
```