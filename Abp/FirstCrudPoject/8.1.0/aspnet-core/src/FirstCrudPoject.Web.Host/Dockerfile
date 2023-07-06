FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/FirstCrudPoject.Web.Host/FirstCrudPoject.Web.Host.csproj", "src/FirstCrudPoject.Web.Host/"]
COPY ["src/FirstCrudPoject.Web.Core/FirstCrudPoject.Web.Core.csproj", "src/FirstCrudPoject.Web.Core/"]
COPY ["src/FirstCrudPoject.Application/FirstCrudPoject.Application.csproj", "src/FirstCrudPoject.Application/"]
COPY ["src/FirstCrudPoject.Core/FirstCrudPoject.Core.csproj", "src/FirstCrudPoject.Core/"]
COPY ["src/FirstCrudPoject.EntityFrameworkCore/FirstCrudPoject.EntityFrameworkCore.csproj", "src/FirstCrudPoject.EntityFrameworkCore/"]
WORKDIR "/src/src/FirstCrudPoject.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/FirstCrudPoject.Web.Host", "src/FirstCrudPoject.Web.Host"]
COPY ["src/FirstCrudPoject.Web.Core", "src/FirstCrudPoject.Web.Core"]
COPY ["src/FirstCrudPoject.Application", "src/FirstCrudPoject.Application"]
COPY ["src/FirstCrudPoject.Core", "src/FirstCrudPoject.Core"]
COPY ["src/FirstCrudPoject.EntityFrameworkCore", "src/FirstCrudPoject.EntityFrameworkCore"]
WORKDIR "/src/src/FirstCrudPoject.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "FirstCrudPoject.Web.Host.dll"]
