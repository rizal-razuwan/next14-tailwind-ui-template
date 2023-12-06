#!/bin/bash

echo "hi....standard nextjs scripts started default : pnpm"

if [ -d .node_modules ]; then
  echo "...directory exists"
  echo "...skipping installations"
  pnpm dev
  echo "...starting dev server"
else
  echo "...node_modules directory not exist."
  pnpm i && pnpm dev
  echo "...starting dev server"
fi
 echo "...something wrong"