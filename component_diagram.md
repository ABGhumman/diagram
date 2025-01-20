# Component Diagram for Social Media Integration System

This is a component diagram illustrating the overall architecture of the social media integration system.

```mermaid
graph LR
    subgraph "User Workstation"
        UI[<<application>> User Interface]
        style UI fill:#fff,stroke:#000,stroke-width:2px
    end

    subgraph "App Server"
        AUTH[<<service>> Authentication]
         style AUTH fill:#fff,stroke:#000,stroke-width:2px
        LS[<<application>> Link Sharing]
         style LS fill:#fff,stroke:#000,stroke-width:2px
        AS[<<application>> Auto-Sharing]
         style AS fill:#fff,stroke:#000,stroke-width:2px
        AN[<<service>> Analytics]
        style AN fill:#fff,stroke:#000,stroke-width:2px
        BM[<<service>> Bot Management]
         style BM fill:#fff,stroke:#000,stroke-width:2px
        PM[<<application>> Profile Management]
        style PM fill:#fff,stroke:#000,stroke-width:2px
        NLP[<<service>> NLP Processor]
         style NLP fill:#fff,stroke:#000,stroke-width:2px
    end

    ACDB[<<datastore>> Account Database]
     style ACDB fill:#fff,stroke:#000,stroke-width:2px
    ANDB[<<datastore>> Analytics Database]
      style ANDB fill:#fff,stroke:#000,stroke-width:2px
     PDB[<<datastore>> Profile Database]
       style PDB fill:#fff,stroke:#000,stroke-width:2px
        AL[<<datastore>> Affiliate Link]
         style AL fill:#fff,stroke:#000,stroke-width:2px

        PI(Platform Integration)
         style PI fill:#fff,stroke:#000,stroke-width:2px
  
    UI -- https --o AUTH
    UI -- rest --o LS
     UI -- rest --o AN
    UI -- rest --o BM
    UI -- rest --o PM
    LS -- internal --o AS
    AS -- link --o PI
     AUTH -- saml --o ACDB
    AN -- odbc --o ANDB
       PM -- odbc --o PDB
     LS -- internal --o AL
       AS -- internal --o AL
   
