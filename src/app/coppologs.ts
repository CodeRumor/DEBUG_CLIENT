export const coppologs = [
  {
    id: 1,
    message: "Storing keys in a directory '\"/root/.aspnet/DataProtection-Keys\"' that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.",
    messageTemplate: "Storing keys in a directory '{path}' that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.",
    level: "Warning",
    timeStamp: "2022-04-12T16:23:59.307",
    exception: null,
    properties: "<properties><property key='path'>/root/.aspnet/DataProtection-Keys</property><property key='EventId'><structure type=''><property key='Id'>60</property><property key='Name'>UsingEphemeralFileSystemLocationInContainer</property></structure></property><property key='SourceContext'>Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository</property></properties>"
  },
  {
    id: 2,
    message: "User profile is available. Using '\"/root/.aspnet/DataProtection-Keys\"' as key repository; keys will not be encrypted at rest.",
    messageTemplate: "User profile is available. Using '{FullName}' as key repository; keys will not be encrypted at rest.",
    level: "Information",
    timeStamp: "2022-04-12T16:23:59.31",
    exception: null,
    properties: "<properties><property key='FullName'>/root/.aspnet/DataProtection-Keys</property><property key='EventId'><structure type=''><property key='Id'>62</property><property key='Name'>UsingProfileAsKeyRepository</property></structure></property><property key='SourceContext'>Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager</property></properties>"
  },
  {
    id: 3,
    message: "Entity Framework Core \"6.0.1\" initialized '\"ApplicationDbContext\"' using provider '\"Microsoft.EntityFrameworkCore.SqlServer\":\"6.0.1\"' with options: \"None\"",
    messageTemplate: "Entity Framework Core {version} initialized '{contextType}' using provider '{provider}:{providerVersion}' with options: {options}",
    level: "Information",
    timeStamp: "2022-04-12T16:23:59.987",
    exception: null,
    properties: "<properties><property key='version'>6.0.1</property><property key='contextType'>ApplicationDbContext</property><property key='provider'>Microsoft.EntityFrameworkCore.SqlServer</property><property key='providerVersion'>6.0.1</property><property key='options'>None</property><property key='EventId'><structure type=''><property key='Id'>10403</property><property key='Name'>Microsoft.EntityFrameworkCore.Infrastructure.ContextInitialized</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Infrastructure</property></properties>"
  },
  {
    id: 4,
    message: "Executed DbCommand (\"2\"ms) [Parameters=[\"\"], CommandType='Text', CommandTimeout='30']\"\n\"\"SELECT 1\"",
    messageTemplate: "Executed DbCommand ({elapsed}ms) [Parameters=[{parameters}], CommandType='{commandType}', CommandTimeout='{commandTimeout}']{newLine}{commandText}",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.007",
    exception: null,
    properties: "<properties><property key='elapsed'>2</property><property key='parameters'></property><property key='commandType'>Text</property><property key='commandTimeout'>30</property><property key='newLine'>\n</property><property key='commandText'>SELECT 1</property><property key='EventId'><structure type=''><property key='Id'>20101</property><property key='Name'>Microsoft.EntityFrameworkCore.Database.Command.CommandExecuted</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Database.Command</property></properties>"
  },
  {
    id: 5,
    message: "Executed DbCommand (\"7\"ms) [Parameters=[\"\"], CommandType='Text', CommandTimeout='30']\"\n\"\"SELECT OBJECT_ID(N'[__EFMigrationsHistory]');\"",
    messageTemplate: "Executed DbCommand ({elapsed}ms) [Parameters=[{parameters}], CommandType='{commandType}', CommandTimeout='{commandTimeout}']{newLine}{commandText}",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.02",
    exception: null,
    properties: "<properties><property key='elapsed'>7</property><property key='parameters'></property><property key='commandType'>Text</property><property key='commandTimeout'>30</property><property key='newLine'>\n</property><property key='commandText'>SELECT OBJECT_ID(N'[__EFMigrationsHistory]');</property><property key='EventId'><structure type=''><property key='Id'>20101</property><property key='Name'>Microsoft.EntityFrameworkCore.Database.Command.CommandExecuted</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Database.Command</property></properties>"
  },
  {
    id: 6,
    message: "Executed DbCommand (\"1\"ms) [Parameters=[\"\"], CommandType='Text', CommandTimeout='30']\"\n\"\"SELECT 1\"",
    messageTemplate: "Executed DbCommand ({elapsed}ms) [Parameters=[{parameters}], CommandType='{commandType}', CommandTimeout='{commandTimeout}']{newLine}{commandText}",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.023",
    exception: null,
    properties: "<properties><property key='elapsed'>1</property><property key='parameters'></property><property key='commandType'>Text</property><property key='commandTimeout'>30</property><property key='newLine'>\n</property><property key='commandText'>SELECT 1</property><property key='EventId'><structure type=''><property key='Id'>20101</property><property key='Name'>Microsoft.EntityFrameworkCore.Database.Command.CommandExecuted</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Database.Command</property></properties>"
  },
  {
    id: 7,
    message: "Executed DbCommand (\"0\"ms) [Parameters=[\"\"], CommandType='Text', CommandTimeout='30']\"\n\"\"SELECT OBJECT_ID(N'[__EFMigrationsHistory]');\"",
    messageTemplate: "Executed DbCommand ({elapsed}ms) [Parameters=[{parameters}], CommandType='{commandType}', CommandTimeout='{commandTimeout}']{newLine}{commandText}",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.023",
    exception: null,
    properties: "<properties><property key='elapsed'>0</property><property key='parameters'></property><property key='commandType'>Text</property><property key='commandTimeout'>30</property><property key='newLine'>\n</property><property key='commandText'>SELECT OBJECT_ID(N'[__EFMigrationsHistory]');</property><property key='EventId'><structure type=''><property key='Id'>20101</property><property key='Name'>Microsoft.EntityFrameworkCore.Database.Command.CommandExecuted</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Database.Command</property></properties>"
  },
  {
    id: 8,
    message: "Executed DbCommand (\"1\"ms) [Parameters=[\"\"], CommandType='Text', CommandTimeout='30']\"\n\"\"SELECT [MigrationId], [ProductVersion]\nFROM [__EFMigrationsHistory]\nORDER BY [MigrationId];\"",
    messageTemplate: "Executed DbCommand ({elapsed}ms) [Parameters=[{parameters}], CommandType='{commandType}', CommandTimeout='{commandTimeout}']{newLine}{commandText}",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.03",
    exception: null,
    properties: "<properties><property key='elapsed'>1</property><property key='parameters'></property><property key='commandType'>Text</property><property key='commandTimeout'>30</property><property key='newLine'>\n</property><property key='commandText'>SELECT [MigrationId], [ProductVersion]\nFROM [__EFMigrationsHistory]\nORDER BY [MigrationId];</property><property key='EventId'><structure type=''><property key='Id'>20101</property><property key='Name'>Microsoft.EntityFrameworkCore.Database.Command.CommandExecuted</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Database.Command</property></properties>"
  },
  {
    id: 9,
    message: "No migrations were applied. The database is already up to date.",
    messageTemplate: "No migrations were applied. The database is already up to date.",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.043",
    exception: null,
    properties: "<properties><property key='EventId'><structure type=''><property key='Id'>20405</property><property key='Name'>Microsoft.EntityFrameworkCore.Migrations.MigrationsNotApplied</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Migrations</property></properties>"
  },
  {
    id: 10,
    message: "Executed DbCommand (\"1\"ms) [Parameters=[\"\"], CommandType='Text', CommandTimeout='30']\"\n\"\"SELECT CASE\n    WHEN EXISTS (\n        SELECT 1\n        FROM [BankAccounts] AS [b]) THEN CAST(1 AS bit)\n    ELSE CAST(0 AS bit)\nEND\"",
    messageTemplate: "Executed DbCommand ({elapsed}ms) [Parameters=[{parameters}], CommandType='{commandType}', CommandTimeout='{commandTimeout}']{newLine}{commandText}",
    level: "Information",
    timeStamp: "2022-04-12T16:24:00.18",
    exception: null,
    properties: "<properties><property key='elapsed'>1</property><property key='parameters'></property><property key='commandType'>Text</property><property key='commandTimeout'>30</property><property key='newLine'>\n</property><property key='commandText'>SELECT CASE\n    WHEN EXISTS (\n        SELECT 1\n        FROM [BankAccounts] AS [b]) THEN CAST(1 AS bit)\n    ELSE CAST(0 AS bit)\nEND</property><property key='EventId'><structure type=''><property key='Id'>20101</property><property key='Name'>Microsoft.EntityFrameworkCore.Database.Command.CommandExecuted</property></structure></property><property key='SourceContext'>Microsoft.EntityFrameworkCore.Database.Command</property></properties>"
  }
];
