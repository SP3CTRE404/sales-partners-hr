import os
import glob

replacements = {
    'bg-obsidian-950': 'bg-white',
    'bg-obsidian-900': 'bg-zinc-50',
    'bg-obsidian-850': 'bg-white',
    'bg-obsidian-800': 'bg-zinc-100',
    'bg-obsidian-700': 'bg-zinc-200',
    'bg-obsidian-600': 'bg-zinc-300',
    'border-obsidian-700': 'border-zinc-200',
    'border-obsidian-800': 'border-zinc-300',
    'border-obsidian-600': 'border-zinc-300',
    'text-white': 'text-zinc-950',
    'text-slate-300': 'text-zinc-600',
    'text-slate-400': 'text-zinc-500',
    'text-slate-200': 'text-zinc-700',
    'text-brand-400': 'text-brand-700',
    'text-brand-500': 'text-brand-600',
    'bg-brand-500': 'bg-brand-600',
    'hover:bg-brand-600': 'hover:bg-brand-700',
    'active:bg-brand-700': 'active:bg-brand-800',
    'hover:text-white': 'hover:text-zinc-900',
    'hover:bg-obsidian-850': 'hover:bg-zinc-100',
    'hover:bg-obsidian-800': 'hover:bg-zinc-200',
    'hover:border-obsidian-700': 'hover:border-zinc-300',
    'shadow-card': 'shadow-sm',
    'shadow-card-hover': 'shadow-md',
    'brightness-0 invert': '', # Remove inversion for logos in light mode
}

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

print("Replacement complete.")
