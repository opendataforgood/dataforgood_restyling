News aggregator for data-driven projects for social good (like Hacker News)
Built on TelelescopeJS (http://telesc.pe) and meteorJS

Mac:

To Set up the application in your local system

1) Clone the repository

    git clone <URL>

2) Install Meteor using curl 
	
	https://install.meteor.com/ | sh

3) Install Meteorite to set up all the dependencies (assuming npm is already installed)
	
	npm install -g meteorite

4) Run the following command

    $mrt update

5) Run $meteor to run the application in your local system

Linux:

    linux Ubuntu 14.04 LTS

1) install git:

    sudo add-apt-repository ppa:git-core/ppa
    sudo apt-get update
    sudo apt-get install git

2) clone d4g

    git clone https://github.com/datracka/dataforgood_restyling.git

3) install meteor

    sudo apt-get install curl
    curl https://install.meteor.com/ | sh

4) install meteorite

    sudo apt-get install npm
    sudo -H npm install -g meteorite
    sudo ln -s /usr/bin/nodejs /usr/bin/node

5) run meteorite

    mrt

6) run meteor

    meteor
