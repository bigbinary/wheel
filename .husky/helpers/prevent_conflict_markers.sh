#!/usr/bin/env sh

repeat() {
  char="$1"
  times="$2"
  text=""
  i=0

  while [ $i -lt $times ]
  do
    text="${text}${char}"
    i=$((i+1))
  done
  echo "$text"
}

prevent_conflict_markers() {
  RED=$(tput setab 1)
  NORMAL=$(tput sgr0)

  left_arrow=$(repeat '<' 7)
  right_arrow=$(repeat '>' 7)
  equal_symbol=$(repeat '=' 7)

  CONFLICT_MARKERS="^${left_arrow}$|^${equal_symbol}$|^${right_arrow}$"
  occurrences_count=$(git --no-pager diff --staged --ignore-blank-lines --name-only -G"$CONFLICT_MARKERS" | wc -l)
  if [ "$occurrences_count" -gt 0 ]
  then
    echo "$RED ERROR $NORMAL Found ${CONFLICT_MARKERS} symbols in staged files."
    echo "Conflict markers should be removed from the following files before committing:"
    git --no-pager diff --staged --ignore-blank-lines --name-only -G"$CONFLICT_MARKERS"
    exit 1;
  fi
}
