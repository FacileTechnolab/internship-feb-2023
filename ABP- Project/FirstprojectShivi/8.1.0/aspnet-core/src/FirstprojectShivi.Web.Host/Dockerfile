FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/FirstprojectShivi.Web.Host/FirstprojectShivi.Web.Host.csproj", "src/FirstprojectShivi.Web.Host/"]
COPY ["src/FirstprojectShivi.Web.Core/FirstprojectShivi.Web.Core.csproj", "src/FirstprojectShivi.Web.Core/"]
COPY ["src/FirstprojectShivi.Application/FirstprojectShivi.Application.csproj", "src/FirstprojectShivi.Application/"]
COPY ["src/FirstprojectShivi.Core/FirstprojectShivi.Core.csproj", "src/FirstprojectShivi.Core/"]
COPY ["src/FirstprojectShivi.EntityFrameworkCore/FirstprojectShivi.EntityFrameworkCore.csproj", "src/FirstprojectShivi.EntityFrameworkCore/"]
WORKDIR "/src/src/FirstprojectShivi.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/FirstprojectShivi.Web.Host", "src/FirstprojectShivi.Web.Host"]
COPY ["src/FirstprojectShivi.Web.Core", "src/FirstprojectShivi.Web.Core"]
COPY ["src/FirstprojectShivi.Application", "src/FirstprojectShivi.Application"]
COPY ["src/FirstprojectShivi.Core", "src/FirstprojectShivi.Core"]
COPY ["src/FirstprojectShivi.EntityFrameworkCore", "src/FirstprojectShivi.EntityFrameworkCore"]
WORKDIR "/src/src/FirstprojectShivi.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "FirstprojectShivi.Web.Host.dll"]
