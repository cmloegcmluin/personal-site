#!/usr/bin/env bash

if [[ $(gcloud config configurations list | grep -m1 douglas-blumeyer) ]] ; then
	echo "The 'douglas-blumeyer' configuration already exists."
else
	gcloud config configurations create douglas-blumeyer
fi
gcloud config configurations activate douglas-blumeyer
gcloud config set project douglas-blumeyer
gcloud config set account kingwoodchuckii@gmail.com
