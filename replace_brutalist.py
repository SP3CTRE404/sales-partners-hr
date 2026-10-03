import os
import glob

replacements = {
    'font-sans': 'font-display',
    'rounded-lg': 'rounded-none',
    'rounded-xl': 'rounded-none',
    'rounded-2xl': 'rounded-none',
    'rounded-3xl': 'rounded-none',
    'rounded-full': 'rounded-none',
    'shadow-sm': 'shadow-brutal-sm',
    'shadow-md': 'shadow-brutal',
    'shadow-lg': 'shadow-brutal',
    'shadow-2xl': 'shadow-brutal',
    'border-transparent': 'border-zinc-950',
    'border-zinc-200': 'border-zinc-950',
    'border-zinc-300': 'border-zinc-950',
    'border-zinc-800': 'border-zinc-950',
    'text-zinc-600': 'text-zinc-800',
    'text-zinc-500': 'text-zinc-700',
    'font-bold': 'font-black uppercase',
    'font-semibold': 'font-bold uppercase',
    'border-brand-500': 'border-zinc-950',
    'bg-brand-600': 'bg-brand-500 border-2 border-zinc-950',
    'text-white': 'text-white',
    'bg-white': 'bg-white',
}

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements.items():
        # Quick hack for specific replacements
        content = content.replace(old, new)
        
    # specific fixes
    content = content.replace('shadow-button', 'shadow-brutal border-2 border-zinc-950')
    content = content.replace('border border-transparent', 'border-2 border-zinc-950')
    content = content.replace('text-zinc-950 border border-brand-500/50', 'text-zinc-950 border-2 border-zinc-950')
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Brutalist Replacement complete.")
