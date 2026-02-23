<!-- step 1 i hmane install kiya node taaki hum bwoser m chala k apne system code ko chala sake js k k

step 2 hamke package k baare m sikha jisme sikha hoe to use  packager
to iske lioye npm ki wensiter par jao vaha s package search karo eg cat-me package them usko apne vs code k terminal m run karo num i cat-me 
use karne k liye require('cat-me') car-me();


folder strucuture
nodemodules  -  saare packages jo use kar rhe ho yha rehte h 
paskage.json - dependies m jo package depend kar rha h .
package-lock.json - saare furthe dependies .


server : 
creation :

sabse phele hum cmd run karte hain npm init -y
them hum express ko install katrte h  -->


1️ ONE-PAGE SHORT NOTES :

 Node.js:
Node.js ek runtime environment hai

JavaScript ko browser ke bahar (server/system) chalata hai

Backend development ke liye use hota hai

 NPM (Node Package Manager)

Node ke saath aata hai

Packages install / manage karta hai

Command use hoti hai:

npm install package-name

 Package

Package = ready-made JS code / library

Time bachata hai, code reuse hota hai

Example: cat-me, express

 npm init -y

Project ko initialize karta hai

package.json file automatically banata hai

-y = saare options default accept

 Folder Structure
 node_modules

Saare installed packages yaha rehte hain

Heavy folder, manually edit nahi karte

 package.json

Project ki main file

Dependencies, scripts, project info hota hai

 package-lock.json

Exact versions store karta hai

Dependency ke andar dependency ka record

 Express.js

Express ek Node.js framework hai

Server banana easy aur fast karta hai

Routing aur request-response handle karta hai

 Simple Server Flow
Browser → Request → Express Server → Response



 INTERVIEW / EXAM QUESTIONS & ANSWERS : 

Q1. Node.js kya hai?

 Node.js ek runtime hai jo JavaScript ko server side par run karta hai.

Q2. Node.js kyu use karte hain?

 Fast hai, JS se backend bana sakte hain, single language frontend + backend.

Q3. npm kya hai?

 npm ek package manager hai jo Node.js ke packages ko manage karta hai.

Q4. Package kya hota hai?

 Package ek ready-made code library hoti hai jo hum npm se install karte hain.

Q5. npm init -y ka use?

 Project start karne ke liye aur package.json banane ke liye.

Q6. node_modules folder ka kaam?

 Installed packages ko store karta hai.

Q7. package.json aur package-lock.json me difference?



package.json → dependency ka naam

package-lock.json → dependency ka exact version

Q8. Express kya hai?

 Express ek framework hai jo Node.js par server banana easy karta hai.

Q9. Express kyu use karte hain?

 Routing, API banana, request-response easily handle hota hai.

Q10. Server kaise run hota hai?
node index.js