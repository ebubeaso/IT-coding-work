#! /bin/bash

function planets {
	PLANETS=('Mercury' 'Venus' 'Earth' 'Mars' 'Jupiter' 'Saturn' 'Uranus' 'Neptune')
	for p in ${PLANETS[@]}; do
		echo 'Planet' $p 'is part of the Solar System'
	done
}
planets
