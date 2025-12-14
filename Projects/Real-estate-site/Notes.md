**Setting up our app**


**Installing Tailwind**
-Our icon is in the public folder.
-set up our React app as usual.
<!-- -To use Tailwind in our project, we need to install  it using:
    'npm install tailwindcss @tailwindcss/vite'
-Navigate to the official 'Tailwind css' docs and follow the instructions there, search for tailwind + vite.
-It is not necessary to import tailwind in every component.
In our index.css include the code below:
    '
     <!-- index.css  -->
        @import "tailwindcss/base";
        @import "tailwindcss/components"; 
        @import "tailwindcss/utilities";
    ' -->
-The above method of installing tailwind has been scraped off, they started talking 'bout sum compatibility issues.
-So we opted installing it using 'postCSS'.
-Follow the installation guidelines in the official documents, then in our index.css, add this: 
        '
        @import "tailwindcss";
        '
-When using images located in the public folder, this is how they are used:
    <!-- '<img src="/image.jpg" alt="image">' -->
-No imports, no nothing.
