import os

def update_file():
    index_path = 'f:/Ashok Bhagat/index.html'
    new_content_path = 'f:/Ashok Bhagat/new_content.js'

    with open(index_path, 'r', encoding='utf-8') as f:
        index_content = f.read()

    with open(new_content_path, 'r', encoding='utf-8') as f:
        new_js_content = f.read()

    start_marker = "const routes = {"
    end_marker = "// --- CORE APP LOGIC ---"

    start_idx = index_content.find(start_marker)
    end_idx = index_content.find(end_marker)

    if start_idx == -1 or end_idx == -1:
        print("Error: Could not find markers in index.html")
        return

    # Keep the end marker
    new_full_content = index_content[:start_idx] + new_js_content + "\n\n" + index_content[end_idx:]

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(new_full_content)

    print("Successfully updated index.html")

if __name__ == "__main__":
    update_file()
