#!/bin/sh

set -e # Exit immediately if a command exits with a non-zero status.
set -u # Treat unset variables as an error.

# Install default config if needed.
[ -f /config/Picard.ini ] || cp -v /defaults/Picard.ini /config/Picard.ini

# Copy the default Firefox profile.
mkdir -p /config/.mozilla/firefox
if [ ! -d /config/.mozilla/firefox/ff-profile ]; then
    cp -vr /defaults/firefox/profile /config/.mozilla/firefox/ff-profile
fi
if [ ! -f /config/.mozilla/firefox/profiles.ini ]; then
    cp -v /defaults/firefox/profiles.ini /config/.mozilla/firefox/
fi

# vim:ts=4:sw=4:et:sts=4
