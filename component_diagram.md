# Component Diagram for Social Media Integration System

This is a component diagram illustrating the overall architecture of the social media integration system.

```mermaid
graph LR
    subgraph "User Workstation"
        UI(<<application>> User Interface)
    end

    subgraph "App Server"
        AUTH(<<service>> Authentication)
        LS(<<application>> Link Sharing)
        AS(<<application>> Auto-Sharing)
         AN(<<service>> Analytics)
         BM(<<service>> Bot Management)
         PM(<<application>> Profile Management)
          NLP(<<service>> NLP Processor)
    end
    
    ACDB(<<datastore>> Account Database)
    ANDB(<<datastore>> Analytics Database)
     PDB(<<datastore>> Profile Database)

    UI -- https --> AUTH
    UI -- rest --> LS
     UI -- rest --> AN
    UI -- rest --> BM
    UI -- rest --> PM
    LS -- internal --> AS
    AS -- link --> PI(Platform Integration)
    
     AUTH -- saml --> ACDB
       AN  -- odbc --> ANDB
    PM -- odbc --> PDB
   
     AL(<<datastore>> Affiliate Link)
      LS -- internal --> AL
      AS -- internal --> AL

      
    style UI fill:#f9f,stroke:#333,stroke-width:2px
    style AUTH fill:#ccf,stroke:#333,stroke-width:2px
    style LS fill:#f9f,stroke:#333,stroke-width:2px
    style AS fill:#f9f,stroke:#333,stroke-width:2px
     style AN fill:#ccf,stroke:#333,stroke-width:2px
      style BM fill:#ccf,stroke:#333,stroke-width:2px
      style PM fill:#f9f,stroke:#333,stroke-width:2px
        style NLP fill:#ccf,stroke:#333,stroke-width:2px
    style ACDB fill:#aaf,stroke:#333,stroke-width:2px
       style ANDB fill:#aaf,stroke:#333,stroke-width:2px
        style PDB fill:#aaf,stroke:#333,stroke-width:2px
          style AL fill:#aaf,stroke:#333,stroke-width:2px
     style PI fill:#ddd,stroke:#333,stroke-width:2px
