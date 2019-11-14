#!/bin/sh
set -eu
. ./config.sh

TARGET_REPOSITORY_NAME=`echo $TARGET_REPOSITORY_URL | rev | cut -d '/' -f 1 | rev | cut -d '.' -f 1`

git clone $TARGET_REPOSITORY_URL
cd $TARGET_REPOSITORY_NAME
touch $TARGET_FILE
echo -n w >> $TARGET_FILE
git add .
git commit -m "auto sprinkled."
git push
cd ..
rm -rf $TARGET_REPOSITORY_NAME
