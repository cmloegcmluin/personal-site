#!/usr/bin/env bash

set -e

gcloud config set project douglas-blumeyer
gcloud config set account kingwoodchuckii@gmail.com
gcloud auth login kingwoodchuckii@gmail.com

gcloud app deploy -q
