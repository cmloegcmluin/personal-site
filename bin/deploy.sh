#!/usr/bin/env bash

set -e

gcloud config configurations activate douglas-blumeyer
gcloud app deploy -q
