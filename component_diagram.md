# Component Diagram for Social Media Integration System

This is a component diagram illustrating the overall architecture of the social media integration system.

```mermaid
graph LR
    subgraph "App Server"
        UI[<<component>> User Interface]
          style UI fill:#fff,stroke:#000,stroke-width:2px

        AUTH(<<component>> Authentication)
          style AUTH fill:#fff,stroke:#000,stroke-width:2px
        LS[<<component>> Link Sharing]
         style LS fill:#fff,stroke:#000,stroke-width:2px
        AS[<<component>> Auto-Sharing]
           style AS fill:#fff,stroke:#000,stroke-width:2px
        AN[<<component>> Analytics]
         style AN fill:#fff,stroke:#000,stroke-width:2px
        BM[<<component>> Bot Management]
        style BM fill:#fff,stroke:#000,stroke-width:2px
       PM[<<component>> Profile Management]
         style PM fill:#fff,stroke:#000,stroke-width:2px
       NLP[<<component>> NLP Processor]
       style NLP fill:#fff,stroke:#000,stroke-width:2px
    end

     ACDB(<<datastore>> Account Database)
     style ACDB fill:#fff,stroke:#000,stroke-width:2px
    ANDB(<<datastore>> Analytics Database)
    style ANDB fill:#fff,stroke:#000,stroke-width:2px
     PDB(<<datastore>> Profile Database)
       style PDB fill:#fff,stroke:#000,stroke-width:2px
        AL(<<datastore>> Affiliate Link)
         style AL fill:#fff,stroke:#000,stroke-width:2px

         PI(<<component>> Platform Integration)
          style PI fill:#fff,stroke:#000,stroke-width:2px


    UI --o  AUTH
    UI --o  LS
     UI --o AN
     UI --o BM
      UI --o PM


      LS --o AS
         AS --o PI
     AUTH --o ACDB
    AN --o ANDB
    PM --o PDB
   AL --o NLP
    
   
