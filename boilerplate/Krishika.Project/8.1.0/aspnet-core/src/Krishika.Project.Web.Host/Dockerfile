FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/Krishika.Project.Web.Host/Krishika.Project.Web.Host.csproj", "src/Krishika.Project.Web.Host/"]
COPY ["src/Krishika.Project.Web.Core/Krishika.Project.Web.Core.csproj", "src/Krishika.Project.Web.Core/"]
COPY ["src/Krishika.Project.Application/Krishika.Project.Application.csproj", "src/Krishika.Project.Application/"]
COPY ["src/Krishika.Project.Core/Krishika.Project.Core.csproj", "src/Krishika.Project.Core/"]
COPY ["src/Krishika.Project.EntityFrameworkCore/Krishika.Project.EntityFrameworkCore.csproj", "src/Krishika.Project.EntityFrameworkCore/"]
WORKDIR "/src/src/Krishika.Project.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Krishika.Project.Web.Host", "src/Krishika.Project.Web.Host"]
COPY ["src/Krishika.Project.Web.Core", "src/Krishika.Project.Web.Core"]
COPY ["src/Krishika.Project.Application", "src/Krishika.Project.Application"]
COPY ["src/Krishika.Project.Core", "src/Krishika.Project.Core"]
COPY ["src/Krishika.Project.EntityFrameworkCore", "src/Krishika.Project.EntityFrameworkCore"]
WORKDIR "/src/src/Krishika.Project.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Krishika.Project.Web.Host.dll"]
