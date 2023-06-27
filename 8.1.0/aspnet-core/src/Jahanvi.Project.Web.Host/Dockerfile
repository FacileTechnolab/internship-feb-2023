FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/Jahanvi.Project.Web.Host/Jahanvi.Project.Web.Host.csproj", "src/Jahanvi.Project.Web.Host/"]
COPY ["src/Jahanvi.Project.Web.Core/Jahanvi.Project.Web.Core.csproj", "src/Jahanvi.Project.Web.Core/"]
COPY ["src/Jahanvi.Project.Application/Jahanvi.Project.Application.csproj", "src/Jahanvi.Project.Application/"]
COPY ["src/Jahanvi.Project.Core/Jahanvi.Project.Core.csproj", "src/Jahanvi.Project.Core/"]
COPY ["src/Jahanvi.Project.EntityFrameworkCore/Jahanvi.Project.EntityFrameworkCore.csproj", "src/Jahanvi.Project.EntityFrameworkCore/"]
WORKDIR "/src/src/Jahanvi.Project.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Jahanvi.Project.Web.Host", "src/Jahanvi.Project.Web.Host"]
COPY ["src/Jahanvi.Project.Web.Core", "src/Jahanvi.Project.Web.Core"]
COPY ["src/Jahanvi.Project.Application", "src/Jahanvi.Project.Application"]
COPY ["src/Jahanvi.Project.Core", "src/Jahanvi.Project.Core"]
COPY ["src/Jahanvi.Project.EntityFrameworkCore", "src/Jahanvi.Project.EntityFrameworkCore"]
WORKDIR "/src/src/Jahanvi.Project.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Jahanvi.Project.Web.Host.dll"]
