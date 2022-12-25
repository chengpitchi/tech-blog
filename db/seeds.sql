USE techblog_db; 

INSERT INTO user (name, password)
    VALUES ('Xandromus', 'aaaaaaa'); 

INSERT INTO post (title, content, user_id, created_at, updated_at)
    VALUES ('Why MVC is so important', 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.', 1, Now(), Now()), 
            ('Authentication vs. Authorization', 'There is a difference between authentication and authorization.  Authentication means confirming your own identity, whereas authorization means being allowed access to the system.', 1, Now(), Now());  
