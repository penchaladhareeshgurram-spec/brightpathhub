from pathlib import Path

root = Path('d:/game')
source = root / 'brightpathhub.html'
dest = root / 'index.html'
text = source.read_text(encoding='utf-8')

# Replace the first style block with external stylesheet
start = text.find('<style>')
end = text.find('</style>', start)
if start != -1 and end != -1:
    text = text[:start] + '<link rel="stylesheet" href="styles.css">' + text[end + len('</style>'):]

# Replace last script block with script src reference
script_start = text.rfind('<script>')
script_end = text.find('</script>', script_start)
if script_start != -1 and script_end != -1:
    text = text[:script_start] + '<script src="script.js"></script>' + text[script_end + len('</script>'):]

# Write to index.html
with dest.open('w', encoding='utf-8') as f:
    f.write(text)

print('index.html updated successfully')
